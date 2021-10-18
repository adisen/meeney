import { useState, useRef, useEffect } from 'react'

import {
  StyledPages,
  StyledPagesHeader,
  StyledPagesContent,
  StyledPagesBusiness
} from './pages.styled'

import businessImage from '../../../assets/businessImage.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisH,
  faPencilAlt,
  faPlusCircle,
  faThumbtack
} from '@fortawesome/free-solid-svg-icons'

const PageBusiness = () => {
  const [open, setOpen] = useState(false)

  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // alert('You clicked outside of me!')
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  const setOpenHandler = () => {
    setOpen(prevState => {
      return !prevState
    })
  }

  return (
    <StyledPagesBusiness open={open}>
      <div>
        <img src={businessImage} alt='business' />
        <div>
          <p>Business name</p>
          <h6>Private seller</h6>
        </div>
        <div className='actions'>
          <FontAwesomeIcon
            className='font'
            icon={faEllipsisH}
            onClick={setOpenHandler}
          />
          <FontAwesomeIcon className='font' icon={faThumbtack} />
        </div>

        <div className='modal' ref={wrapperRef}>
          <p>
            <FontAwesomeIcon icon={faThumbtack} /> Pin
          </p>
          <hr />
          <p>
            <FontAwesomeIcon icon={faPencilAlt} /> Edit page
          </p>
        </div>
      </div>
    </StyledPagesBusiness>
  )
}

const Pages = () => {
  return (
    <StyledPages>
      <StyledPagesHeader>
        <div className='headerTitle'>
          <p>My Pages</p>
          <button>
            <FontAwesomeIcon
              icon={faPlusCircle}
              style={{
                marginRight: '10px',
                color: '#FBB03B'
              }}
            />{' '}
            Create New
          </button>
        </div>

        <input type='text' placeholder='Search Pages' />
      </StyledPagesHeader>
      <StyledPagesContent>
        <PageBusiness />
        <PageBusiness />
        <PageBusiness />
        <PageBusiness />
      </StyledPagesContent>
    </StyledPages>
  )
}

export default Pages
