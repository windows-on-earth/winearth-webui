import { DatePicker, CalendarDate } from "@nextui-org/react";
import { parseDate } from "@internationalized/date"
import React from "react";
import { MyDateRangePickerProps } from "@/types/Search";



export default function MyDateRangePicker({onStartDate, onEndDate, className} : MyDateRangePickerProps) {
    const handleStartDate = (value: CalendarDate | null) => {
        if (value) {
            onStartDate(value.toString())
        }
    }
    const handleEndDate = (value: CalendarDate | null) => {
        if (value) {
            onEndDate(value.toString())
        }
    }
    return (
        <div className={className}>
            <div className="flex justify-around">
                <DatePicker
                    label="Start Date"
                    defaultValue={parseDate("2016-06-01")}
                    onChange={handleStartDate}
                    className="max-w-[284px]"
                    showMonthAndYearPickers
                />
                <DatePicker
                    label="End Date"
                    defaultValue={parseDate("2017-06-30")}
                    onChange={handleEndDate}
                    className="max-w-[284px]"
                    showMonthAndYearPickers
                />
            </div>
        </div>
    )
}