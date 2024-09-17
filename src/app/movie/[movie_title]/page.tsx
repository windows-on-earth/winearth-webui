import SearchBar from '@/app/ui/searchbar'
import MovieElements from '@/app/ui/movie/movie-elements'
import { headers } from 'next/headers'
import { getMovieData } from '@/actions/getMovieData'
import MovieData from '@/app/ui/movie/movie-data'

export async function generateMetadata({ params } : { params: {movie_title: string} }) {
  const baseUrl = process.env.BASE_URL || 'https://winearth.sdsc.edu'
  const pageData = await getMovieData(params.movie_title);

  return {
    title: pageData.movie,
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${pageData.movie}`,
      title: pageData.movie,
      description: `View movie ${pageData.movie} of Earth from the ISS`,
      siteName: 'Windows on Earth',
    },
  };
}

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