import { StyledFeedHeader } from './feedheader.styled'
import { useState } from 'react'

const FeedHeader = () => {
  const [current, setCurrent] = useState('page')

  return (
    <StyledFeedHeader>
      <p
        className={current === 'community' && 'active'}
        onClick={() => setCurrent('community')}
      >
        Community
      </p>
      <p
        className={current === 'trending' && 'active'}
        onClick={() => setCurrent('trending')}
      >
        See What's Trending
      </p>
      <p
        className={current === 'page' && 'active'}
        onClick={() => setCurrent('page')}
      >
        My Page
      </p>
    </StyledFeedHeader>
  )
}

export default FeedHeader
