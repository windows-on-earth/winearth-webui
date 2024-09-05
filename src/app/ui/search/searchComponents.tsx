'use client'

import { Button } from "@nextui-org/react"
import { useState } from "react"
import MyDateRangePicker from "@/app/ui/search/myDateRangePicker"
import { calendarDateToMMDDYYYY } from "@/utils/time"

export default function SearchComponents() {
    const [startDate, setStartDate] = useState<string | null>("01/01/2000")
    const [endDate, setEndDate] = useState<string | null>("12/31/2099")

    const handleStartDate = (value: string) => {
        setStartDate(calendarDateToMMDDYYYY(value))
    }
    const handleEndDate = (value: string) => {
        setEndDate(calendarDateToMMDDYYYY(value))
    }

    const handleClick = () => {
        console.log(`Start Date: ${startDate}`)
        console.log(`End Date: ${endDate}`)
    }

    return (
        <div className="flex flex-col w-11/12 m-auto mt-4">
            <Button
                onClick={handleClick}
                className="self-end"
            >Search
            </Button>
            <p className="m-auto mb-4">Please select a start date and end date for when movies where shot.</p>
            <MyDateRangePicker
                onStartDate={handleStartDate}
                onEndDate={handleEndDate}
                className="w-1/2 m-auto"
            />

        </div>
        
    )
}