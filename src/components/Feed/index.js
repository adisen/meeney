import styled from 'styled-components'

import FeedHeader from './FeedHeader'
import ProfileDetails from './ProfileDetails'
import CreatePost from './CreatePost'
import Post from './Post'

const StyledFeed = styled.section`
  margin-bottom: 3rem;
  width: 50%;

  @media screen and (max-device-width: 450px) {
    width: 95%;
    margin: 0 auto;
  }
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
