import MoviesDisplay from "@/app/ui/movies/moviesdisplay"
import { getMovies } from "@/actions/getMovies"

const INITIAL_NUMBER_OF_MOVIES = 25

export const revalidate = 0 // No static generation, fetch at runtime

export default async function Page() {
  const initialMovies = await getMovies(0, INITIAL_NUMBER_OF_MOVIES)
  return (
    <div>
      <b className="text-5xl text-cyan-800 m-auto mt-5 block text-center">Movies</b>
      <MoviesDisplay initialMovies={initialMovies}/>
    </div>
  )
}