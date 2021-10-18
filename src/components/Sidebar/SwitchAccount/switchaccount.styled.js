import styled from 'styled-components'

export const StyledSwitchAccount = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  color: #490057;
  text-align: center;
  margin-bottom: 30px;
  width: 90%;

  h5 {
    font-weight: normal;
    font-size: 20px;
    margin: 0;
    margin-bottom: 30px;
  }

  .switch {
    background: #b8b8b8 0% 0% no-repeat padding-box;
    color: #fff;
    border-radius: 10px;
  }

  @media screen and (max-device-width: 450px) {
    width: 100%;
  }
`

export const Paragraph = styled.p`
  display: inline-block;
  padding: 12px 0px;
  height: 100%;
  width: 50%;
  margin: 0;
  cursor: pointer;
  border-radius: ${props =>
    props.position === 'left' ? '10px 0 0 10px' : '0 10px 10px 0'};

  &.active {
    background: #490057 0% 0% no-repeat padding-box;
  }
`
