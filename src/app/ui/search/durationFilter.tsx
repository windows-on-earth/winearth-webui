import { Input } from "@nextui-org/react"
import { DurationFilterProps } from "@/types/Search"

export default function DurationFilter({onMaxDuration, onMinDuration, className}: DurationFilterProps) {
    const handleMaxDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            onMaxDuration(e.target.value)
        }
    }
    const handleMinDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            onMinDuration(e.target.value)
        }
    }
    return (
        <div className={className}>
            <div className="flex justify-around">
                <Input
                    type="number"
                    label="Minimum Length in Seconds"
                    placeholder="0"
                    onChange={handleMinDuration}
                    className="max-w-[284px]"
                    color="secondary"
                />
                <Input
                    type="number"
                    label="Maximum Length in Seconds"
                    placeholder="10000"
                    onChange={handleMaxDuration}
                    className="max-w-[284px]"
                    color="secondary"
                /> 
            </div>
            
        </div>
    )
}