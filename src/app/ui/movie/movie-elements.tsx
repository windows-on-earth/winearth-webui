'use client'

import { useEffect, useState } from "react"
import { Switch } from "../switch"
import MainVideo from "./main-video"
import Button from "../button"
import { Movie } from "@/types/Movie"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface movieElementProps {
  "data": Movie
}

export default function MovieElements( { data } : movieElementProps) {
  const [isTimeLapse, setTimeLapse] = useState(false)
  const datetime = new Date(data.time_stamp)
  const router = useRouter()

  const handleToggle = () => {
    setTimeLapse(!isTimeLapse)
  }
  const handleBackClick = () => {
    router.back()
  }

  const getMovieSource = () => {
    if (isTimeLapse) {
      return data.url_rt
    } else {
      return data.url
    }
  }

  return (
    <div>
      {/* Back button */}
      <Button className="text-5xl" onClick={handleBackClick}>&lt;</Button>
      <MainVideo source={getMovieSource()}/>
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
            <h3 className="text-white text-2xl">
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
          <Button className="inline-block h-16 w-16 bg-white">
            <div className="relative w-3/4 h-3/4 m-auto">
              <Image
                src="/iconmonstr-link-thin.svg"
                alt="Share Link Icon"
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
  )
}