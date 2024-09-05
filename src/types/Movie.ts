export interface Movie {
  "movie": string,
  "url": string,
  "url_rt": string,
  "thumbnail_512": string,
  "iis_path_512": string,
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

export interface movieAPIResponse {
  "next": string,
  "previous": string,
  "count": number,
  "results": Movie[]
}

export interface GetMovieOptions {
  end_date?: string;
  limit?: number;
  max_length?: number;
  min_length?: number;
  offset?: number;
  start_date?: string;
}