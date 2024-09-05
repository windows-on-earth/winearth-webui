import { Movie } from "@/types/Movie"

export interface MyDateRangePickerProps {
    onStartDate: (value: string) => void
    onEndDate: (value: string) => void
    className?: string
}

export interface SearchComponentProps {
    initialMovies: Movie[]
}

export type SearchFilterOptions = {
    end_date?: string,
    max_length?: number,
    min_length?: number,
    start_date?: string,
}

export interface DurationFilterProps {
    onMaxDuration: (value: string) => void
    onMinDuration: (value: string) => void
    className? : string
}