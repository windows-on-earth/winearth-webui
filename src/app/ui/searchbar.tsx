import Image from 'next/image'
import Button from '@/app/ui/button'

export default function SearchBar() {
  return (
    <>
      {/* Search Box */}
      <div className="hidden flex flex-row block relative mb-2 h-10 w-full bg-white text-black ">
        <Image
          src="/MagnifyingGlass.webp"
          width={256}
          height={256}
          className="m-0.5 h-auto w-auto"
          alt="Search Icon"
        />
        <div className="px-2 m-0.5 ml-auto h-auto w-auto bg-gray-500/50 text-white">
          Search
        </div>
      </div>
    </>
  )
}