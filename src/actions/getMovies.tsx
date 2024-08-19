//actions/getMovies.ts

'use server'
import { movieAPIResponse } from '@/types/Movie'

export const getMovies = async (offset: number, limit: number) => {
  try {
    const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`
    const response = await fetch(url)
    const data = (await response.json()) as movieAPIResponse
    return data.movie
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}