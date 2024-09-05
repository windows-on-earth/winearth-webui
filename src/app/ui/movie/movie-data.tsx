import { Movie } from "@/types/Movie";
import { convertUnixToDatetime, secondsToHms } from "@/utils/time";
import { nextui } from "@nextui-org/react";

interface movieDataProps {
    movie: Movie
  }
export default function MovieData({movie}: movieDataProps) {
    return (
        <div className="flex flex-col bg-neutral-400 h-full">
            <h2 className="text-yellow-300 text-2xl font-bold text-center">Movie Data</h2>
            <div className="flex flex-row gap-0 basis-full">
                <div className="flex flex-col basis-1/2 justify-around ml-2">
                    <p>Movie ID:</p>
                    <p>Date:</p>
                    <p>Time:</p>
                    <p>Camera:</p>
                    <p>Lens:</p>
                    <p>ISO: </p>
                    <p>Shutter:</p>
                    <p>F-stop:</p>
                    <p>FPS:</p>
                    <p>Full length:</p>
                </div>
                <div className="flex flex-col basis-1/2 justify-around">
                    <p>{movie.movie}</p>
                    <p>{convertUnixToDatetime(movie.time_stamp, "Date")}</p>
                    <p>{convertUnixToDatetime(movie.time_stamp, "Time")}</p>
                    <p>{movie.model ? movie.model: "N/A"}</p>
                    <p>{movie.lens ? movie.lens : "N/A"}</p>
                    <p>{movie.iso ? movie.iso : "N/A"}</p>
                    <p>{movie.shutter_speed ? movie.shutter_speed : "N/A"}</p>
                    <p>{movie.f_number ? movie.f_number : "N/A"}</p>
                    <p>{movie.images/movie.seconds}</p>
                    <p>{secondsToHms(movie.seconds)}</p>
                </div>
            </div>
        </div>
    )
}