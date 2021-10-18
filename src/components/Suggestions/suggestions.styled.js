import styled from 'styled-components'

export const StyledSuggestions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;

  @media screen and (max-device-width: 450px) {
    width: 95%;
    margin: 0 auto;
  }
`

export const StyledListings = styled.div`
  width: 90%;

  h2 {
    font-weight: normal;
    font-size: 20px;
    margin: 0;
    margin-bottom: 20px;
    color: #490057;
  }

  & > div {
    background: #e8d8ec;
    border-radius: 16px;
    padding: 20px;
    overflow: hidden;
    width: 100%;
  }

  @media screen and (max-device-width: 450px) {
    width: 100%;
  }
`

export const StyledListing = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .single-listing {
    display: flex;
    justify-content: space-between;

    h4 {
      color: #490057;
      font-size: 1.2rem;
      font-weight: normal;
      margin: 0;
      margin-right: 18px;
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 0.7rem;
      color: #787878;
    }

    button {
      border: none;
      border-radius: 20px;
      background-color: #490057;
      color: #fff;
      height: 30px;
      padding: 7px 20px;
      font-size: 16px;
      margin-bottom: 22px;
    }
  }

  .orders {
    p {
      margin: 0;
      padding: 0;
      font-size: 0.8rem;
      color: #787878;
    }

    .progress-outer {
      margin-top: 10px;
      width: 100%;
      height: 11px;
      background-color: #9b9b9b3b;
      border-radius: 80px;
      position: relative;
    }

    .progress-inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 11px;
      background: #fbb03b;
      border-radius: 80px;
    }
  }
`

export const StyledSuggestedPages = styled.div`
  margin-top: 2rem;
  width: 90%;

  .header {
    display: flex;
    justify-content: space-around;
    padding-bottom: 0;
    margin-bottom: 2rem;

    p {
      color: #9b9b9b;
      cursor: pointer;
      margin-bottom: 0px;
      padding-bottom: 10px;
      border-bottom: 1.5px solid #9b9b9b;
      width: 55%;
      height: 100%;
      text-align: center;
      font-size: 0.9rem;

      &.active {
        color: #490057;
        border-bottom: 5px solid #490057;
      }
    }
  }

  .content {
    background: #e8d8ec 0% 0% no-repeat padding-box;
    border-radius: 16px;
    padding: 20px;
  }

  .single-listing {
    color: #490057;

    h4 {
      margin-right: 10px;
      font-size: 0.9rem;
    }

    button {
      font-size: 0.8rem;
      margin-right: 10px;
    }

    .font {
      /* align-self: center; */
      margin-top: 10px;
    }
  }

  @media screen and (max-device-width: 450px) {
    width: 100%;
  }
`
