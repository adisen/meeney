import { StyledMain, StyledMainContent } from './maincontent.styled'
import Sidebar from '../Sidebar'
import Feed from '../Feed'
import Suggestions from '../Suggestions'

const index = () => {
  return (
    <StyledMain>
      <StyledMainContent>
        <Sidebar />
        <Feed />
        <Suggestions />
      </StyledMainContent>
    </StyledMain>
  )
}

export default index
