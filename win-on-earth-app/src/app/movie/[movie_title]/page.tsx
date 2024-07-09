import SearchBar from '@/app/ui/searchbar'
import MainPhoto from '@/app/ui/photo/mainphoto'
import MainVideo from '@/app/ui/movie/mainvideo'
import { Switch } from '@/app/ui/switch'
import Button from '@/app/ui/button'
import Image from 'next/image'
import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'

export default function Page({ params }: { params: { movie_title: string } }) {
  const API_PATH_MOVIES_BASE = "https://windows-on-earth.sdsc.osn.xsede.org/movies"
  const movie_path = `${params.movie_title}/${params.movie_title}.mp4`
  const test_movie = `${API_PATH_MOVIES_BASE}/${movie_path}`
  return (
    <main>
      <h1>Windows On Earth</h1>
      <p>See Earth through the Astronauts' Lens</p>
      <div className="flex flex-col relative top-12 left-24  w-3/5">
        <SearchBar />
        <MainVideo source={test_movie}/>
        {/* <MainPhoto/> */}
        {/* Media UI elements */}
        <div className="flex flex-row justify-between border-red-500 border-2">
          {/* Media Info */}
          <div className="flex flex-col basis-3/4 flex-initial gap-2 border-green-500 border-2">
            <div className="border-blue-500 border-2">
              <h2 className="text-yellow-500 text-5xl">
                {params.movie_title}
              </h2>
            </div>
            <div className="border-yellow-500 border-2">
              <h3 className="text-white text-2xl">
                Date Taken:
              </h3>
            </div>
          </div>
          <div className="">
            <Switch className="m-2"/>
          </div>          
          {/* Social */}
          <div className="flex flex-col gap-1 self-end m-0.5">
            <Button className="inline-block h-16 w-16 bg-white">
              <div className="relative w-3/4 h-3/4 m-auto">
                <Image
                  src="/iconmonstr-link-thin.svg"
                  alt="Share Link Icon"
                  fill={true}
                />
              </div>              
            </Button>
              
            <Button className="inline-block h-16 w-16 bg-white">
              <div className="relative w-2/3 h-2/3 m-auto">
                <Image
                  src="/iconmonstr-download-19.svg"
                  alt="Download Link Icon"
                  fill={true}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}