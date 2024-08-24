//actions/getMovieData.ts

'use server'
import { Movie } from '@/types/Movie'

export const getMovieData = async (movie_title: string) => {
  try {
    const url = `${process.env.API_PATH}/${movie_title}/`
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      }
    })
    const data = (await response.json()) as Movie
    return data
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}