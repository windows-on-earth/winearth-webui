type Props = {
  source: string,
}

export default function MainVideo({source} : Props) {
  console.log(source)
  return (
    <div className="border-red-500 border-2 block relative mb-2 max-h-svh max-w-full w-full">
    <video 
      src={source}
      controls
      className=""
      />
    </div>
    
  )
}