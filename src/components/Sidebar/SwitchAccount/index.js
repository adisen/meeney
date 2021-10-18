import React, { useState } from 'react'

import { StyledSwitchAccount, Paragraph } from './switchaccount.styled'

const SwitchAccount = () => {
  const [current, setCurrent] = useState('left')

  const setCurrentHandler = curr => {
    setCurrent(curr)
  }

  return (
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
  )
}

export default SwitchAccount
