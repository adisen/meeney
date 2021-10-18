import {
  StyledNavbar,
  StyledNavbarContent,
  StyledProfileDetails,
  StyledMenuItems
} from './topnavbar.styled'

import pp from '../../assets/pp.png'
import arrowDown from '../../assets/arrow-down.png'
import usFlag from '../../assets/usFlag.png'
import inboxIcon from '../../assets/inboxIcon.png'
import notificationIcon from '../../assets/notificationIcon.png'
import logo from '../../assets/logo.png'

const index = () => {
  return (
    <StyledNavbar>
      <StyledNavbarContent>
        <StyledProfileDetails>
          <img src={pp} alt='profile' />
          <img src={arrowDown} alt='Arrow Down' className='arrow-down' />
          <p>Jonathan Deo</p>
        </StyledProfileDetails>
        <StyledMenuItems>
          <img className='usFlag' src={usFlag} alt='US Flag' />
          <img className='inboxIcon' src={inboxIcon} alt='Inbox Icon' />
          <img
            className='notificationIcon'
            src={notificationIcon}
            alt='Notification Icon'
          />
          <input type='text' placeholder='Search' />
          <img src={logo} alt='Logo' />
        </StyledMenuItems>
      </StyledNavbarContent>
    </StyledNavbar>
  )
}

export default index
