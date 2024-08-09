'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { API_MOVIES_LIST_PATH, movieProperties } from '@/app/lib/constants';


export default function MoviesDisplay() {  
  const [moviesList, setMoviesList] = useState([])
  const [isListView, setListView] = useState(true)
  const router = useRouter()

  useEffect(() => {
    console.log(`Fetching from ${process.env.NEXT_PUBLIC_API_PATH}/`)
    fetch(`${process.env.NEXT_PUBLIC_API_PATH}/`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setMoviesList(data)
      });
  }, [])

  const handleToggleView = () => {
    setListView(!isListView)
  }
  const handleBackClick = () => {
    router.back()
  }
  const convertUnixToDatetime = (unix: number) => {
    const unixtime = new Date(Number(unix) * 1000)
    // Extract date components
    const month = unixtime.toLocaleString('en-US', { month: 'short', timeZone: 'GMT' });
    const day = unixtime.toLocaleString('en-US', { day: '2-digit', timeZone: 'GMT' });
    const year = unixtime.toLocaleString('en-US', { year: 'numeric', timeZone: 'GMT' });
    const hours = unixtime.toLocaleString('en-US', { hour: '2-digit', hour12: false, timeZone: 'GMT' });
    const minutes = unixtime.toLocaleString('en-US', { minute: '2-digit', timeZone: 'GMT' });

    return `${month} ${day} ${year} ${hours}:${minutes} GMT`
  }
  return (
    <div className="flex flex-col gap-1 relative top-4 w-2/3 m-auto">
      {/* Toggle button between Grid and List views */}
      <div className="border-blue-400 border-2 ml-auto w-fit ">
        <button className="flex" onClick={handleToggleView}>
          <div className={clsx(
              "w-16",
              {
                "bg-green-800/50 dark:bg-green-800": isListView,
                "bg-[--backgroundstart-rgb] dark:bg-black": !isListView
              },
            )}
          >
          List
          </div>
          <div className={clsx(
              "w-16",
              {
                "bg-[--backgroundstart-rgb] dark:bg-black": isListView,
                "bg-green-800/50 dark:bg-green-800": !isListView
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
          {moviesList.map((item: movieProperties) => (
            <Link className="flex flex-col items-center cursor-pointer" href={`/movie/${item.movie}`}  key={item.movie}>
              <Image
                src={item.thumbnail_512}
                width={512}
                height={270}
                alt={`${item.movie} thumbnail`}
              />
            </Link>        
          ))}
        </div> :
        // List view
        <div className="flex flex-col justify-between w-full m-auto border-t-4 border-blue-200/25 divide-y-4 divide-blue-200/25">
          {moviesList.map((item: movieProperties) => (
            // Clicking on any part of the movie item will navigate to the corresponding page
            <Link className="flex items-center gap-96 cursor-pointer p-2" href={`/movie/${item.movie}`} key={item.movie}>
              <Image
                src={item.thumbnail_512}
                width={512/3}
                height={270/3}
                alt={`${item.movie} thumbnail`}
                className="border-2 border-slate-50/25"
              />
              <b key={item.movie} className="block">{convertUnixToDatetime(item.time_stamp)}</b>
            </Link>        
          ))}
        </div>
      }
    </div>
  )
}