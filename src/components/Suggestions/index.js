import React, { useState } from 'react'
import {
  StyledListings,
  StyledSuggestions,
  StyledListing,
  StyledSuggestedPages
} from './suggestions.styled'

import pp from '../../assets/profileImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Suggestions = () => {
  const [current, setCurrent] = useState('pages')

  return (
    <StyledSuggestions>
      <StyledListings>
        <h2>Suggested Listings</h2>
        <div>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Smoothie</h4>
                  <p>Smoothy Store</p>
                </div>
                <button>Order</button>
              </div>
              <div className='orders'>
                <p>25 orders Left</p>
                <div className='progress-outer'>
                  <div className='progress-inner'></div>
                </div>
              </div>
            </div>
          </StyledListing>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Smoothie</h4>
                  <p>Smoothy Store</p>
                </div>
                <button>Order</button>
              </div>
              <div className='orders'>
                <p>25 orders Left</p>
                <div className='progress-outer'>
                  <div className='progress-inner'></div>
                </div>
              </div>
            </div>
          </StyledListing>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Smoothie</h4>
                  <p>Smoothy Store</p>
                </div>
                <button>Order</button>
              </div>
              <div className='orders'>
                <p>25 orders Left</p>
                <div className='progress-outer'>
                  <div className='progress-inner'></div>
                </div>
              </div>
            </div>
          </StyledListing>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Smoothie</h4>
                  <p>Smoothy Store</p>
                </div>
                <button>Order</button>
              </div>
              <div className='orders'>
                <p>25 orders Left</p>
                <div className='progress-outer'>
                  <div className='progress-inner'></div>
                </div>
              </div>
            </div>
          </StyledListing>
        </div>
      </StyledListings>

      <StyledSuggestedPages>
        <div className='header'>
          <p
            className={current === 'users' && 'active'}
            onClick={() => setCurrent('users')}
          >
            Suggested Users
          </p>
          <p
            className={current === 'pages' && 'active'}
            onClick={() => setCurrent('pages')}
          >
            Suggested Pages
          </p>
        </div>
        <div className='content'>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Rose Kooto</h4>
                  <p>Abuja</p>
                </div>
                <button>Support</button>
                <FontAwesomeIcon className='font' icon={faBookmark} size='1x' />
              </div>
            </div>
          </StyledListing>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Rose Kooto</h4>
                  <p>Abuja</p>
                </div>
                <button>Support</button>
                <FontAwesomeIcon className='font' icon={faBookmark} size='1x' />
              </div>
            </div>
          </StyledListing>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Rose Kooto</h4>
                  <p>Abuja</p>
                </div>
                <button>Support</button>
                <FontAwesomeIcon className='font' icon={faBookmark} size='1x' />
              </div>
            </div>
          </StyledListing>
          <StyledListing>
            <img src={pp} alt='' />
            <div>
              <div className='single-listing'>
                <div>
                  <h4>Rose Kooto</h4>
                  <p>Abuja</p>
                </div>
                <button>Support</button>
                <FontAwesomeIcon className='font' icon={faBookmark} size='1x' />
              </div>
            </div>
          </StyledListing>
        </div>
      </StyledSuggestedPages>
    </StyledSuggestions>
  )
}

export default Suggestions
