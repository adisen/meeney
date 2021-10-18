import styled from 'styled-components'

export const StyledSidebar = styled.section`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-device-width: 450px) {
    width: 95%;
    margin: 0 auto;
  }
`
