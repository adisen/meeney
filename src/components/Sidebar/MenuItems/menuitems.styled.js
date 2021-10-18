import styled from 'styled-components'

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

  .active {
    color: #fbb03b;
  }

  .font {
    margin-right: 10px;
  }

  @media screen and (max-device-width: 450px) {
    width: 100%;
  }
`
