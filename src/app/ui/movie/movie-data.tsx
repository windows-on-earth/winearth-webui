import { Movie } from "@/types/Movie";
import { convertUnixToDatetime, secondsToHms, roundHalf } from "@/utils/time";

interface movieDataProps {
    movie: Movie
  }
export default function MovieData({movie}: movieDataProps) {
    const f_stop = JSON.parse(movie.f_number)[0]/JSON.parse(movie.f_number)[1]
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
                    <p className="hidden">FPS:</p> {/* Hidden until further notice */}
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
                    <p>{movie.f_number ? f_stop : "N/A"}</p>
                    <p className="hidden">{roundHalf(movie.images/movie.seconds)}</p> {/* Hidden until further notice */}
                    <p>{secondsToHms(movie.seconds)}</p>
                </div>
            </div>
        </div>
    )
}