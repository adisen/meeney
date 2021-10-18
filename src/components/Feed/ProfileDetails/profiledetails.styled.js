import styled from 'styled-components'

export const StyledProfile = styled.div`
  margin-top: 40px;
  background: #9400b11c 0% 0% no-repeat padding-box;
  border-radius: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;

  img {
    width: 100px;
    height: 100px;
  }
`

export const StyledProfileDetails = styled.div`
  width: 40%;

  h1 {
    color: #490057;
    font-size: 35px;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #787878;
    font-weight: normal;
    font-size: 16px;
  }

  p {
    color: #787878;
    font-size: 12px;
  }
`

export const StyledProfileStats = styled.div`
  width: 40%;

  .stats {
    display: flex;
    justify-content: space-between;

    h3 {
      color: #490057;
      font-size: 16px;
      margin: 0;
      padding: 0;
    }

    h4 {
      color: #787878;
      font-size: 12px;
      margin: 0;
      padding: 0;
    }
  }

  button {
    border: none;
    border-radius: 20px;
    background-color: #490057;
    color: #fff;
    padding: 7px 30px;
    margin-top: 18px;
    font-size: 12px;
    margin-bottom: 22px;
  }

  p {
    color: #490057;
    font-size: 10px;
  }
`
