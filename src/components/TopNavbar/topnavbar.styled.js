import styled from 'styled-components'

export const StyledNavbar = styled.header`
  height: 150px;
  background: transparent linear-gradient(267deg, #a303a0 0%, #490057 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 0px 0px 35px 35px;
  color: #fff;
`

export const StyledNavbarContent = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-device-width: 450px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const StyledProfileDetails = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 41px;
    height: 41px;
    margin-right: 8px;

    &.arrow-down {
      width: 10px;
      height: 5px;
    }
  }

  p {
    font-size: 15px;
  }
`

export const StyledMenuItems = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  img {
    &.usFlag {
      width: 33px;
      height: 19px;
    }

    &.inboxIcon {
      width: 24px;
      height: 20px;
    }

    &.notificationIcon {
      width: 19px;
      height: 20px;
    }
  }

  input {
    width: 250px;
    font-size: 15px;
    color: #fff;
    background: #490057 0% 0% no-repeat padding-box;
    box-shadow: 24px 22px 93px #00000029;
    border-radius: 8px;
    padding: 12px 12px;
    border: none;
    opacity: 1;

    ::placeholder {
      color: #fff;
      opacity: 1;
    }

    @media screen and (max-device-width: 450px) {
      display: none;
    }
  }
`
