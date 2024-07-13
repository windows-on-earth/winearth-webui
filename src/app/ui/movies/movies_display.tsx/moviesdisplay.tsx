'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

export default function MoviesDisplay() {
  const API_MOVIES_LIST_PATH = "http://127.0.0.1:8000/api/movies/"
  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    fetch(API_MOVIES_LIST_PATH)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setMoviesList(data)
      });
  }, [])
  return (
    <div>
      {moviesList.map((item: movieProperties) => (
        <Link key={item.movie} href={`movie/${item.movie}`} className="block">{item.movie}</Link>
      ))}
    </div>
  )
}