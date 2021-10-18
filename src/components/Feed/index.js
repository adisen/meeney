import styled from 'styled-components'

import FeedHeader from './FeedHeader'
import ProfileDetails from './ProfileDetails'
import CreatePost from './CreatePost'
import Post from './Post'

const StyledFeed = styled.section`
  margin-bottom: 3rem;
  width: 50%;
`

const index = () => {
  return (
    <StyledFeed>
      <FeedHeader />
      <ProfileDetails />
      <CreatePost />
      <Post />
      <Post />
    </StyledFeed>
  )
}

export default index
