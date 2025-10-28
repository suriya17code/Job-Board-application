
import { icons } from '../constants/icons'

const IconImage = ({name,alt="icon",cname=''}) => {
    const src = icons[name];
  return (
             <img
               src={src}
              alt={alt}
              className={cname}
            />
  )
}

export default IconImage