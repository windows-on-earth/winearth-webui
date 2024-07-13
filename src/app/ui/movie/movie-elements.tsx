'use client'

import { useEffect, useState } from "react"
import { Switch } from "../switch"
import MainVideo from "./main-video"
import Button from "../button"
import Image from "next/image"

interface movieProperties {
  "movie": string,
  "url": string,
  "url_rt": string,
  "iis_mission": string,
  "time_stamp": number,
  "seconds": number,
  "images": number,
  "start_latitude": number,
  "start_longitude": number,
  "end_latitude": number,
  "end_longitude": number,
  "model": string,
  "lens": string,
  "iso": string,
  "shutter_speed": string,
  "f_number": string
}

interface movieElementProps {
  "data": movieProperties
}

export default function MovieElements( { data } : movieElementProps) {
  const [isTimeLapse, setTimeLapse] = useState(false)

  const handleToggle = () => {
    setTimeLapse(!isTimeLapse)
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
      <MainVideo source={getMovieSource()}/>
      {/* <MainPhoto/> */}
      {/* Media UI elements */}
      <div className="flex flex-row justify-between border-red-500 border-2">
        {/* Media Info */}
        <div className="flex flex-col basis-3/4 flex-initial gap-2 border-green-500 border-2">
          <div className="border-blue-500 border-2">
            <h2 className="text-yellow-500 text-5xl">
              {data.movie}
            </h2>
          </div>
          <div className="border-yellow-500 border-2">
            <h3 className="text-white text-2xl">
              Date Taken:
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
  )
}