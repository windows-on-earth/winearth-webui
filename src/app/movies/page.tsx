import MoviesDisplay from "@/app/ui/movies/movies_display.tsx/moviesdisplay"

export default function Page() {
  return (
    <div>
      <b className="text-5xl text-cyan-800 m-auto block text-center">Movies</b>
      <MoviesDisplay/>
    </div>
  )
}