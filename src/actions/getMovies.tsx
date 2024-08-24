//actions/getMovies.ts
"use server"
import { movieAPIResponse } from '@/types/Movie'
import { handleError } from '@/utils/handleResponseError'

export const getMovies = async (offset: number, limit: number) => {
  const url = `${process.env.API_PATH}/?offset=${offset}&limit=${limit}`
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