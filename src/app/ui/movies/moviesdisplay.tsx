'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { sortBy } from 'lodash';
import { Movie } from '@/types/Movie';
import { getMovies } from '@/actions/getMovies';
import { useInView } from 'react-intersection-observer';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { NUMBER_OF_MOVIES_TO_FETCH, INITIAL_NUMBER_OF_MOVIES } from '@/lib/constants';
import { convertUnixToDatetime, secondsToHms } from '@/utils/time';
import { SearchFilterOptions } from '@/types/Search';

type MovieListProps = {
  initialMovies: Movie[]
  options?: SearchFilterOptions
}

export default function MoviesDisplay({initialMovies, options}: MovieListProps) { 
  const [currOffset, setCurrOffset] = useState(INITIAL_NUMBER_OF_MOVIES)
  const [movies, setMovies] = useState<Movie[]>(initialMovies)
  const [hasMoreData, setHasMoreData] = useState(true)
  const [scrollTrigger, isInView] = useInView()
  const [isListView, setListView] = useState(true)
  const router = useRouter()

  async function loadMoreMovies() {
    if (hasMoreData) {
      try {
        const apiMovies = await getMovies(
          {
            offset: currOffset,
            limit: NUMBER_OF_MOVIES_TO_FETCH,
            start_date: options? options.start_date : "",
            end_date: options? options.end_date : "",
            min_length: options? options.min_length : 0,
            max_length: options? options.max_length : Number.MAX_SAFE_INTEGER
          }
        )
        if (apiMovies.length == 0) {
          setHasMoreData(false)
        }
        setMovies((prevMovies) => [...prevMovies, ...apiMovies])
        setCurrOffset((prevOffset) => prevOffset + NUMBER_OF_MOVIES_TO_FETCH)
      } catch (error) {
        console.log(error)
        throw new Error(`The following error occured: ${error}`)
      }
    }
  }

  /**
   * Sorts movies stored in state according to predefined filters and supports
   *   ascending and descending sorting. Modifies the existing movie list in state.
   *   Uses lodash's `sortBy()` function as the underlying sorter.
   * @param filterOrder a string that has a combination of the filter and order to sort by, delimited by "-"
   */
  function sortMovies(filterOrder: string) {
    const [filter, order] = filterOrder.split("-")
    console.log(`Sorting movies by ${filter} and ordering by ${order}`)
    let sortedMovies: Movie[] = sortBy(movies, [filter])
    if (order == "DESC") {
      sortedMovies = sortedMovies.reverse()
    }
    setMovies(sortedMovies)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiMovies = await getMovies(
          {
            offset: 0,
            limit: NUMBER_OF_MOVIES_TO_FETCH,
            start_date: options? options.start_date : "",
            end_date: options? options.end_date : "",
            min_length: options? options.min_length : 0,
            max_length: options? options.max_length : Number.MAX_SAFE_INTEGER
          }
        )
        if (apiMovies.length == 0) {
          setHasMoreData(false)
        }
        setMovies(apiMovies)
        setCurrOffset(Math.min(NUMBER_OF_MOVIES_TO_FETCH, apiMovies.length))
      } catch (error) {
        console.log(error)
        throw new Error(`The following error occured: ${error}`)
      }
    }
    fetchData()
  }, [options])

  useEffect(() => {
    if (isInView && hasMoreData) {
      loadMoreMovies()
    }
  }, [isInView, hasMoreData])


  const handleToggleView = () => {
    setListView(!isListView)
  }

  return (
    <div className="flex flex-col gap-1 relative top-4 w-5/6 m-auto">
      {/* Interactable buttons*/}
      <div className="flex flex-row gap-2 ml-auto w-fit ">
        {/* Sorting drop down*/}
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-yellow-500">
              Sort
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="bg-slate-50" onAction={(key) => sortMovies(key.toString())}>
            <DropdownItem key="time_stamp-ASC" className="bg-yellow-500">Date - Ascending</DropdownItem>
            <DropdownItem key="time_stamp-DESC" className="bg-yellow-500">Date - Descending</DropdownItem>
            <DropdownItem key="seconds-ASC" className="bg-yellow-500">Duration - Ascending</DropdownItem>
            <DropdownItem key="seconds-DESC" className="bg-yellow-500 dark:blue-400">Duration - Descending</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* View Dropdown */}
        <button className="flex gap-0 border-transparent border-1 rounded-medium overflow-hidden" onClick={handleToggleView}>
          <div className={clsx(
              "flex w-16 justify-center items-center dark:text-black",
              {
                "bg-yellow-500": isListView,
                "bg-slate-300": !isListView
              },
            )}
          >
          List
          </div>
          <div className={clsx(
              "flex w-16 justify-center items-center dark:text-black",
              {
                "bg-slate-300": isListView,
                "bg-yellow-500": !isListView
              },
            )}
          >
          Grid
          </div>
        </button>
      </div>
      {!isListView ? 
        // Grid View
        <div className="grid grid-cols-5 place-items-center gap-2 m-auto">
          {movies.map((item: Movie) => (
            <Link className="flex flex-col items-center cursor-pointer" href={`/movie/${item.movie}`}  key={`${item.movie}_grid`}>
              <div className="flex gap-1 justify-between">
                <div className="relative h-full w-1/2 hidden">
                  <Image
                    src={item.iis_path_512}
                    width={512/3}
                    height={366/3}
                    alt={`${item.movie} IIS path`}
                    className="basis-1/2 border-2 border-slate-50/25" 
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={item.thumbnail_512}
                    width={512}
                    height={270}
                    alt={`${item.movie} thumbnail`}
                    className="basis-1/2"
                  />
                </div>
                
                
              </div>
              
            </Link>        
          ))}
          {(hasMoreData && <div ref={scrollTrigger}>Loading...</div>) || (
            <p> No more posts to load </p>
          )}
        </div> :
        // List view
        <div className="flex flex-col justify-between w-full m-auto border-t-4 border-blue-200/25 divide-y-4 divide-blue-200/25">
          <div className="flex items-center justify-between p-2">
            <div className="ml-14 basis-1/3 font-bold text-lg text-yellow-500">Movie</div>
            <div className="ml-12 font-bold text-lg text-yellow-500">Date Captured</div>
            <div className="mr-2 font-bold text-lg text-yellow-500">Duration (real speed)</div>
          </div>
          {movies.map((item: Movie) => (
            // Clicking on any part of the movie item will navigate to the corresponding page
            <Link className="flex items-center justify-between cursor-pointer p-2" href={`/movie/${item.movie}`} key={`${item.movie}_list`}>
              <div className="flex gap-1">
                <div className="relative w-[270px] h-[366/3px]">
                  <Image
                    src={item.iis_path_512}
                    // width={512/3}
                    // height={366/3}
                    fill
                    alt={`${item.movie} IIS path`}
                    className="border-2 border-slate-50/25" 
                  />
                </div>
                <Image
                  src={item.thumbnail_512}
                  width={512/2}
                  height={270/2}
                  alt={`${item.movie} thumbnail`}
                  className="border-2 border-slate-50/25"
                />
              </div>
              <b className="block">{convertUnixToDatetime(item.time_stamp, "Datetime")}</b>
              <b className="mr-16">{secondsToHms(item.seconds)}</b>
            </Link>        
          ))}
          {(hasMoreData && <div ref={scrollTrigger}>Loading...</div>) || (
            <p> No more posts to load </p>
          )}
        </div>
      }
    </div>
  )
}