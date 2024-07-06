import Image from 'next/image'

export default function MainPhoto() {
  return (
    <div className="border-red-500 border-2 block relative mb-24 max-h-svh max-w-full h-svh w-full">
    <Image 
      src="/ISS011-E-14335_2.JPG"
      fill={true}
      className=""
      alt="Sample Image from Space"
      />
    </div>
    
  )
}