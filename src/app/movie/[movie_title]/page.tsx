import SearchBar from '@/app/ui/searchbar'
import MovieElements from '@/app/ui/movie/movie-elements'
import { useRouter } from 'next/router'
import { getMovieData } from '@/actions/getMovieData'
import MovieData from '@/app/ui/movie/movie-data'

export default async function Page({ params }: { params: { movie_title: string } }) {
  const movieData = await getMovieData(params.movie_title)
  return (
    <main>
      <div className="flex flex-row gap-1 w-11/12 m-auto">
        <div className="flex flex-col w-3/4">
          <SearchBar />
          <MovieElements data={movieData}/>
        </div>
        <div className="flex flex-col mt-12 w-1/4">
          {/* Home/Search Button? */}
          <div className="border-2 border-purple-400 h-1/4 hidden"></div>
          <div className="bg-neutral-400 basis-5/6">
            <MovieData movie={movieData}/>
          </div>
        </div>
      </div>
    </main>
  )
}