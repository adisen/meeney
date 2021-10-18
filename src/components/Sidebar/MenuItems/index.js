import { StyledMenuItems } from './menuitems.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCog,
  faImage,
  faRss,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const MenuItems = () => {
  return (
    <StyledMenuItems>
      <div>
        <p className='active'>
          <FontAwesomeIcon icon={faRss} className='font' /> Feeds
        </p>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faImage} className='font' /> Gallery
        </p>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faCog} className='font' /> Settings
        </p>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faUsers} className='font' /> Referral
        </p>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faBookmark} className='font' /> Saved
        </p>
      </div>
    </StyledMenuItems>
  )
}

export default MenuItems
