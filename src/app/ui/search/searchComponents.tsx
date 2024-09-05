'use client'

import { Button } from "@nextui-org/react"
import { useState } from "react"
import dynamic from "next/dynamic"
import MyDateRangePicker from "@/app/ui/search/myDateRangePicker"
import { calendarDateToMMDDYYYY } from "@/utils/time"
import { SearchComponentProps, SearchFilterOptions } from "@/types/Search"
import { Movie } from "@/types/Movie"
import DurationFilter from "./durationFilter"

const MoviesDisplay = dynamic(() => import("@/app/ui/movies/moviesdisplay"), {ssr: false} )

export default function SearchComponents({initialMovies}: SearchComponentProps) {
    const [startDate, setStartDate] = useState<string | undefined>("01/01/2000")
    const [endDate, setEndDate] = useState<string | undefined>("12/31/2099")
    const [minDuration, setMinDuration] = useState<number>(0)
    const [maxDuration, setMaxDuration] = useState<number>(Number.MAX_SAFE_INTEGER)
    const [options, setOptions] = useState<SearchFilterOptions>({})

    const handleStartDate = (value: string) => {
        setStartDate(calendarDateToMMDDYYYY(value))
    }
    const handleEndDate = (value: string) => {
        setEndDate(calendarDateToMMDDYYYY(value))
    }
    const handleMinDuration = (value: string) => {
        setMinDuration(Number(value))
    }
    const handleMaxDuration = (value: string) => {
        setMaxDuration(Number(value))
    }

    const handleClick = () => {
        console.log(`Start Date: ${startDate}`)
        console.log(`End Date: ${endDate}`)
        setOptions({
            ...options,
            start_date: startDate,
            end_date: endDate,
            min_length: minDuration,
            max_length: maxDuration,
        })

    }

    return (
        <div className="flex flex-col gap-1 w-11/12 m-auto mt-4">
            <Button
                onClick={handleClick}
                className="self-end"
            >Search
            </Button>
            <p className="m-auto mb-4 text-center">
                Filter options<br/>
                Movies on the home page will reflect the results here.
            </p>
            <MyDateRangePicker
                onStartDate={handleStartDate}
                onEndDate={handleEndDate}
                className="w-1/2 m-auto"
            />
            <DurationFilter
                onMaxDuration={handleMaxDuration}
                onMinDuration={handleMinDuration}
                className="w-1/2 m-auto"
            />
            <MoviesDisplay initialMovies={initialMovies} options={options}/>
        </div>
        
    )
}