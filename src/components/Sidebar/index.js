import { StyledSidebar } from './sidebar.styled'

import SwitchAccount from './SwitchAccount'
import MenuItems from './MenuItems'
import Pages from './Pages'

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SwitchAccount />
      <MenuItems />
      <Pages />
    </StyledSidebar>
  )
}

export default Sidebar
