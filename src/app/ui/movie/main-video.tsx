type Props = {
  source: string,
}

export default function MainVideo({source} : Props) {
  return (
    <div className="flex-none aspect-w-16 aspect-h-9">
      <video 
        src={source}
        controls
        className="w-full h-auto min-h-[72svh] max-w-[68svw] object-cover transition-opacity duration-500"
        //height="688.35"
        //width="1305.32"
        />
    </div>
    
  )
}