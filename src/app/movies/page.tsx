import { getMovies } from "@/actions/getMovies"
import { INITIAL_NUMBER_OF_MOVIES } from "@/lib/constants"
import dynamic from "next/dynamic"

const MoviesDisplay = dynamic(() => import("@/app/ui/movies/moviesdisplay"), {ssr: false} )

export const revalidate = 0 // No static generation, fetch at runtime

export default async function Page() {
  const initialMovies = await getMovies({offset: 0, limit: INITIAL_NUMBER_OF_MOVIES})
  return (
    <div>
      <b className="text-5xl text-slate-500 dark:text-slate-50 m-auto mt-5 block text-center">Movies</b>
      <MoviesDisplay initialMovies={initialMovies}/>
    </div>
  )
}