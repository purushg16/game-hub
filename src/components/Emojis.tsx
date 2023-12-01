import { Image, ImageProps } from "@chakra-ui/react"

import meh from '../assets/meh.png'
import heart from '../assets/heart.webp';
import exceptional from '../assets/fire.webp';

interface Props{
    rating: number
}

export const Emojis = ({rating}:Props) => {

    const emojiMap : { [key:number] : ImageProps } = {
        3: { src: meh, alt:'meh', boxSize: '25px' },
        4: { src: heart, alt:'fine', boxSize: '25px' },
        5: { src: exceptional, alt:'exceptional', boxSize: '25px' },
    }

    if (rating < 3) return null 
    return <Image {...emojiMap[rating]} />

}
