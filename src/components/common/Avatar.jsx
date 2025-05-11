import { CarTaxiFront } from 'lucide-react'
import { Avatar as AvatarDemo, AvatarFallback, AvatarImage } from '../ui/avatar'

const Avatar = ({ src = '', alt = '', size = 15 }) => {
  return (
    <AvatarDemo className={`h-20 w-20 shadow-md rounded-full bg-accent ${size}`}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className={`bg-blend-color  ${size}`}>
        <CarTaxiFront size={50} />
      </AvatarFallback>
    </AvatarDemo>
  )
}

export default Avatar
