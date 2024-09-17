'use client'

import { Suspense, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { Switch } from "@/app/ui/switch"
import MainVideo from "@/app/ui/movie/main-video"
import Loading from "@/app/movie/[movie_title]/loading"
import { Movie } from "@/types/Movie"
import SharingPopover from "@/app/ui/movie/sharingPopover"


interface movieElementProps {
  "data": Movie
}

export default function MovieElements( { data } : movieElementProps) {
  const [isTimeLapse, setTimeLapse] = useState(false)
  const [videoSource, setVideoSource] = useState(data.url)
  const datetime = new Date(Number(data.time_stamp)*1000)
  const router = useRouter()
  const fullUrl = typeof window !== 'undefined' && window.location ? window.location.toString() : ''

  const handleToggle = () => {
    setTimeLapse(!isTimeLapse)
    setVideoSource((prevSource) =>
      prevSource === data.url ? data.url_rt : data.url
    )
  }
  const handleBackClick = () => {
    router.back()
  }

  return (
    <div className="flex flex-col gap-1 mt-2">
      {/* Back button */}
      <Button className="text-xl dark:text-white w-4 bg-neutral-400" onClick={handleBackClick}>Back</Button>
      <Suspense fallback={<Loading />}>
        <MainVideo source={videoSource}/>
      </Suspense>
      {/* <MainPhoto/> */}
      {/* Media UI elements */}
      <div className="flex flex-row justify-between">
        {/* Media Info */}
        <div className="flex flex-col basis-3/4 flex-initial gap-2">
          <div className="">
            <h2 className="text-yellow-500 text-5xl">
              {data.movie}
            </h2>
          </div>
          <div className="">
            <h3 className="text-black dark:text-white text-2xl">
              Date Taken: {datetime.toString()}
            </h3>
          </div>
        </div>
        <div className="">
          <Switch
            className="m-2"
            onToggle={handleToggle}
            checkedStatus={isTimeLapse}
          />
        </div>          
        {/* Social */}
        <div className="flex flex-col gap-1 self-end m-0.5">
          <SharingPopover pathName={fullUrl}/>            
          <Link
            className="w-16 min-w-16 h-16 rounded-full bg-slate-200 p-0 flex items-center justify-center"
            href={videoSource}
            target="_blank"
          >
            <div className="relative w-3/5 h-3/5 rounded-full m-auto">
              <Image
                src="/iconmonstr-download-19.svg"
                alt="Download Link Icon"
                fill={true}
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}