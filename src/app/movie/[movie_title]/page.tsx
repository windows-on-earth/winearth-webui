import SearchBar from '@/app/ui/searchbar'
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import MovieElements from '@/app/ui/movie/movie-elements'

const API_MOVIES_LIST_PATH = "http://127.0.0.1:8000/api/movies"

async function getMovieData(movie_title: string) {
  const res = await fetch(`${API_MOVIES_LIST_PATH}/${movie_title}`, {
    headers: {
      'Accept': 'application/json',
    }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page({ params }: { params: { movie_title: string } }) {
  const movieData = await getMovieData(params.movie_title)
  return (
    <main>
      <div className="flex flex-col relative top-12 left-24 w-3/5">
        <SearchBar />
        <MovieElements data={movieData}/>
      </div>
    </main>
  )
}