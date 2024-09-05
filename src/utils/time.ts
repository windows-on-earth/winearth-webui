
/**
 * Converts a time expressed in unix to a requested datetime format.
 * @param unix Time in unix
 * @param format Date/Time format wanting to be returned. Accepts "Date", "Time", and "Datetime"
 * @returns `String` formatted datetime according to `format` parameter.
 */
export function convertUnixToDatetime (unix: number, format: string) {
    const unixtime = new Date(Number(unix) * 1000)
    // Extract date components
    const month = unixtime.toLocaleString('en-US', { month: 'short', timeZone: 'GMT' });
    const day = unixtime.toLocaleString('en-US', { day: '2-digit', timeZone: 'GMT' });
    const year = unixtime.toLocaleString('en-US', { year: 'numeric', timeZone: 'GMT' });
    const hours = unixtime.toLocaleString('en-US', { hour: '2-digit', hour12: false, timeZone: 'GMT' });
    const minutes = unixtime.toLocaleString('en-US', { minute: '2-digit', timeZone: 'GMT' });
    const seconds = unixtime.toLocaleString('en-US', { second: '2-digit', timeZone: 'GMT' });

    switch (format) {
        case "Date": {
            return `${month} ${day}, ${year}`
        }
        case "Time": {
            return `${hours}:${minutes}:${seconds} GMT`
        }
        case "Datetime": {
            return `${month} ${day} ${year} ${hours}:${minutes} GMT`
        }
        default: {
            return "Invalid format type. Choose between 'Date', 'Time', or 'Datetime'."
        }
    }
}

export function secondsToHms(d: number) {
    d = Number(d);

    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
}

/**
 * Formats a CalendarDate string from YYYY-MM-DD to MM/DD/YYYY
 * @param date string representing a CalendarDate
 * @returns date in MM/DD/YY format
 */
export function calendarDateToMMDDYYYY(date: string) {
    const [year, month, day] = date.split("-") 
    return `${month}/${day}/${year}`
}