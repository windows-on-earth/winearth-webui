type Props = {
  source: string,
}

export default function MainVideo({source} : Props) {
  return (
    <div className="block relative mb-2 max-h-svh max-w-full w-full">
    <video 
      src={source}
      controls
      className=""
      />
    </div>
    
  )
}