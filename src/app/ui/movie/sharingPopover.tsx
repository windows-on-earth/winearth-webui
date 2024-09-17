import Image from "next/image"
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react"
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share'

interface SharingPopoverProps {
    "pathName": string
}

export default function SharingPopover({ pathName }: SharingPopoverProps) {
    return (
        <Popover placement="right">
            <PopoverTrigger>
              <Button className="w-16 min-w-16 h-16 rounded-full bg-slate-200 p-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4 rounded-full m-auto">
                    <Image
                      src="/iconmonstr-link-thin.svg"
                      alt="Share Link Icon"
                      fill={true}
                      className="object-contain"
                    />
                </div>              
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex">
                <FacebookShareButton
                  url={pathName} >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton
                  url={pathName}
                  appId={''} >
                  <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
                <TwitterShareButton
                  url={pathName} >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
            </PopoverContent>
          </Popover>
    )
}