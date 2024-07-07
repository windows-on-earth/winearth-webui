import SearchBar from '@/app/ui/searchbar'
import MainPhoto from '@/app/ui/photo/mainphoto'
import MainVideo from '@/app/ui/movie/mainvideo'
import { Switch } from '@/app/ui/switch'
import Button from '@/app/ui/button'

export default function Page() {
  const test_movie = "https://windows-on-earth.sdsc.osn.xsede.org/movies/ISS020-E-30460-30578/ISS020-E-30460-30578.mp4"
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
                ISS011-E-14335_2
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
            <Button className="inline-block h-16 w-16">
              Share
            </Button>
            <Button className="inline-block h-16 w-16">
              Download
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}