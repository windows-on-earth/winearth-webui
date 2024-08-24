import SearchBar from '@/app/ui/searchbar'
import MovieElements from '@/app/ui/movie/movie-elements'
import { useRouter } from 'next/router'
import { getMovieData } from '@/actions/getMovieData'

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