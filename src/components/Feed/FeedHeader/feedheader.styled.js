import styled from 'styled-components'

export const StyledFeedHeader = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 0;

  p {
    color: #9b9b9b;
    cursor: pointer;
    margin-bottom: 0px;
    padding-bottom: 10px;
    border-bottom: 1.5px solid #9b9b9b;
    width: 35%;
    height: 100%;
    text-align: center;

    &.active {
      color: #490057;
      border-bottom: 5px solid #490057;
    }

    @media screen and (max-device-width: 450px) {
      width: 95%;
    }
  }

  @media screen and (max-device-width: 450px) {
    flex-wrap: wrap;
  }
`
