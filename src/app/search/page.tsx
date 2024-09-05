import SearchComponents from "@/app/ui/search/searchComponents"
import { getMovies } from "@/actions/getMovies"
import { INITIAL_NUMBER_OF_MOVIES } from "@/lib/constants"

export const revalidate = 0 // No static generation, fetch at runtime

export default async function Page() {
    const initialMovies = await getMovies({offset: 0, limit: INITIAL_NUMBER_OF_MOVIES})
    return (
        <div>
            <SearchComponents initialMovies={initialMovies}/>
        </div>
    )
}