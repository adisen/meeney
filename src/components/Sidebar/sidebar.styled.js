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

export const StyledMenuItems = styled.div`
  background-color: #490057;
  color: #fff;

  width: 90%;
  box-shadow: 2px 6px 20px #0000001c;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 50px;

  div {
    margin-left: 30px;
    display: flex;
    align-items: center;
  }

  img {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 20px;
  }

  p {
    display: inline-block;
    font-size: 18px;
  }

  @media screen and (max-device-width: 450px) {
    width: 100%;
  }
`

export const StyledPages = styled.div`
  border-radius: 13px;
  width: 90%;
  background-color: #fff;
  margin-bottom: 50px;

  .headerTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  p {
    color: #490057;
    display: inline-block;
    font-weight: normal;
  }

  @media screen and (max-device-width: 450px) {
    width: 100%;
  }
`

export const StyledPagesHeader = styled.div`
  margin: 20px;

  button {
    background: #490057 0% 0% no-repeat padding-box;
    border-radius: 20px;
    border: none;
    color: #fff;
    width: 100px;
    height: 28px;
    font-size: 10px;
  }

  input {
    width: 100%;
    background: #d5d5d5 0% 0% no-repeat padding-box;
    box-shadow: 24px 22px 93px #00000029;
    border-radius: 50px;
    border: none;
    padding: 10px 40px;
  }
`

export const StyledPagesContent = styled.div`
  padding-bottom: 30px;
`

export const StyledPagesBusiness = styled.div`
  background: #f3f3f3 0% 0% no-repeat padding-box;
  margin-bottom: 8px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 20px; */
    height: 58px;
    width: 88%;
    margin: 0 auto;
  }

  img {
    width: 44px;
    height: 44px;
    /* margin-right: 20px; */
  }

  p {
    margin: 0;
    margin-bottom: 5px;
  }

  h6 {
    margin: 0;
    padding: 0;
    color: #9b9b9b;
  }

  .actions {
    display: flex;
    flex-direction: column;
    height: 80%;
    gap: 0;
    /* margin-left: 85px; */

    img {
      width: 10px;
    }
  }
`
