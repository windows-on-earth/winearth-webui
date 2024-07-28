import SearchBar from '@/app/ui/searchbar'
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import MovieElements from '@/app/ui/movie/movie-elements'
import { useRouter } from 'next/router'
import { DEV_API_MOVIES_LIST_PATH, movieProperties } from '@/app/lib/constants'

async function getMovieData(movie_title: string) {
  const res = await fetch(`${DEV_API_MOVIES_LIST_PATH}/${movie_title}/`, {
    headers: {
      'Accept': 'application/json',
    }
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`)
  }
  return res.json()
}

export async function generateStaticParams() {
  const movies = await fetch(DEV_API_MOVIES_LIST_PATH)
    .then((res) => res.json())
  return movies.map((movie: movieProperties) => ({
    movie_title: movie.movie,
  }))
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