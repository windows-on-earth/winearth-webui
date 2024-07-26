export interface movieProperties {
    "movie": string,
    "url": string,
    "url_rt": string,
    "thumbnail_512": string,
    "iis_mission": string,
    "time_stamp": number,
    "seconds": number,
    "images": number,
    "start_latitude": number,
    "start_longitude": number,
    "end_latitude": number,
    "end_longitude": number,
    "model": string,
    "lens": string,
    "iso": string,
    "shutter_speed": string,
    "f_number": string
  }

export const API_MOVIES_LIST_PATH="https://winearth.sdsc.edu/api/movies/"
export const DEV_API_MOVIES_LIST_PATH="http://127.0.0.1:8000/api/movies/"