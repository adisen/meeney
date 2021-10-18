import { useState } from 'react'
import {
  StyledSidebar,
  StyledSwitchAccount,
  Paragraph,
  StyledMenuItems,
  StyledPages,
  StyledPagesHeader,
  StyledPagesContent,
  StyledPagesBusiness
} from './sidebar.styled'

import rssIcon from '../../assets/rssIcon.png'
import galleryIcon from '../../assets/galleryIcon.svg'
import cogIcon from '../../assets/cogIcon.png'
import referralIcon from '../../assets/referralIcon.svg'
import bookmarkIcon from '../../assets/bookmarkIcon.png'
import businessImage from '../../assets/businessImage.png'
import ellipsisIcon from '../../assets/ellipsisIcon.svg'
import pinIcon from '../../assets/pinIcon.svg'

const Sidebar = () => {
  const [current, setCurrent] = useState('left')

  const setCurrentHandler = curr => {
    setCurrent(curr)
  }

  return (
    <StyledSidebar>
      <StyledSwitchAccount>
        <h5>Switch Account</h5>
        <div className='switch'>
          <Paragraph
            className={current === 'left' && 'active'}
            position='left'
            onClick={() => setCurrentHandler('left')}
          >
            Social
          </Paragraph>
          <Paragraph
            className={current === 'right' && 'active'}
            onClick={() => setCurrentHandler('right')}
          >
            Business
          </Paragraph>
        </div>
      </StyledSwitchAccount>

      <StyledMenuItems>
        <div>
          <img src={rssIcon} alt='' />
          <p>Feeds</p>
        </div>
        <div>
          <img src={galleryIcon} alt='Gallery' />
          <p>Gallery</p>
        </div>
        <div>
          <img src={cogIcon} alt='Cog' />
          <p>Settings</p>
        </div>
        <div>
          <img src={referralIcon} alt='Referral' />
          <p>Referral</p>
        </div>
        <div>
          <img src={bookmarkIcon} alt='Bookmark' />
          <p>Saved</p>
        </div>
      </StyledMenuItems>

      <StyledPages>
        <StyledPagesHeader>
          <div className='headerTitle'>
            <p>My Pages</p>
            <button>Create New</button>
          </div>

          <input type='text' placeholder='Search Pages' />
        </StyledPagesHeader>
        <StyledPagesContent>
          <StyledPagesBusiness>
            <div>
              <img src={businessImage} alt='business' />
              <div>
                <p>Business name</p>
                <h6>Private seller</h6>
              </div>
              <div className='actions'>
                <img src={ellipsisIcon} alt='ellipsis' />
                <img src={pinIcon} alt='ellipsis' />
              </div>
            </div>
          </StyledPagesBusiness>
          <StyledPagesBusiness>
            <div>
              <img src={businessImage} alt='business' />
              <div>
                <p>Business name</p>
                <h6>Private seller</h6>
              </div>
              <div className='actions'>
                <img src={ellipsisIcon} alt='ellipsis' />
                <img src={pinIcon} alt='ellipsis' />
              </div>
            </div>
          </StyledPagesBusiness>
          <StyledPagesBusiness>
            <div>
              <img src={businessImage} alt='business' />
              <div>
                <p>Business name</p>
                <h6>Private seller</h6>
              </div>
              <div className='actions'>
                <img src={ellipsisIcon} alt='ellipsis' />
                <img src={pinIcon} alt='ellipsis' />
              </div>
            </div>
          </StyledPagesBusiness>
          <StyledPagesBusiness>
            <div>
              <img src={businessImage} alt='business' />
              <div>
                <p>Business name</p>
                <h6>Private seller</h6>
              </div>
              <div className='actions'>
                <img src={ellipsisIcon} alt='ellipsis' />
                <img src={pinIcon} alt='ellipsis' />
              </div>
            </div>
          </StyledPagesBusiness>
        </StyledPagesContent>
      </StyledPages>
    </StyledSidebar>
  )
}

export default Sidebar
