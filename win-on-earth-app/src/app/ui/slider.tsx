interface SliderProps {
  text: string
}

export default function Slider( { text } : SliderProps ) {
  return (
    <span>{text}</span>
  )
}