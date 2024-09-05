//actions/getMovies.ts
"use server"
import { movieAPIResponse, GetMovieOptions } from '@/types/Movie'
import { handleError } from '@/utils/handleResponseError'

/**
 * Server side fetch function for movies using the Winearth API
 * @param end_date Set what is the latest date a returned movie can have. Defaults to "01/01/2100"
 * @param limit Determines how many movies are returned. Defaults to Number.MAX_SAFE_INTEGER
 * @param max_length Sets the maximum length of movies allowed to be returned in seconds. Defaults to Number.MAX_SAFE_INTEGER
 * @param min_length Sets the minimum length of movies allowed to be returned in seconds. Defaults to 0
 * @param offset Determines where in the list of returned movies to start fetching. Defaults to 0
 * @param ordering Determines how the returned list of movies will be sorted. Defaults to "timestamp"
 * @param start_date Set what is the earliest date a returned movie can have. Defaults to "01/01/2000"
 * @returns Array of Movie type objects
 */
export async function getMovies(
  {
    end_date = "01/01/2100",
    limit = Number.MAX_SAFE_INTEGER,
    max_length = Number.MAX_SAFE_INTEGER,
    min_length = 0,
    offset = 0,
    ordering = "timestamp",
    start_date = "01/01/2000",
  } : GetMovieOptions
){
  const url = `${process.env.API_PATH}/?` +
  `end_date=${end_date}&` +
  `limit=${limit}&` +
  `max_length=${max_length}&` +
  `min_length=${min_length}&` +
  `offset=${offset}&` +
  `ordering=${ordering}&` +
  `start_date=${start_date}`
  try {
    const response = await fetch(url)
    const data = (await response.json()) as movieAPIResponse
    if (!response.ok) {
      throw await handleError(response)
    }
    return data.results
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}