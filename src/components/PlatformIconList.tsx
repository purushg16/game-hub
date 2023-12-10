import { HStack, Icon } from "@chakra-ui/react"
import {
    FaWindows,
    FaPlaystation,
    FaLinux,
    FaApple,
    FaXbox,
    FaAndroid
} 
from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import {IconType} from 'react-icons'
import { Platform } from "../services/platform-services";

interface Props{
    platforms: Platform[] | undefined
}

function PlatformIconList({platforms}: Props) {

    const IconMap: { [key: string]: IconType } = {
        windows: FaWindows,
        playstation: FaPlaystation,
        andriod: FaAndroid,
        mac: FaApple,
        xbox: FaXbox,
        linux: FaLinux,
        web: BsGlobe,  
        iphone: MdPhoneIphone,
        nintendo: SiNintendo
    }

  return (
    <HStack marginY={2}>
        {platforms?.map((platform) => (
            <Icon key={platform.id} as={IconMap[platform.slug]} color='gray.500'/> 
        ))}
    </HStack>
  )
}

export default PlatformIconList