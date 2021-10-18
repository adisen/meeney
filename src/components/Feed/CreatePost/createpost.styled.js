import styled from 'styled-components'

export const StyledCreatePost = styled.div`
  background-color: #fff;
  margin-top: 60px;
  padding: 30px;
  border: 1px solid #70707078;
  border-radius: 30px;

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    input {
      width: 75%;
      border: 1px solid #70707078;
      border-radius: 30px;
      height: 40px;
      padding: 20px;

      ::placeholder {
        color: #490057;
        font-size: 14px;
      }

      @media screen and (max-device-width: 450px) {
        text-align: center;
        width: 100%;
      }
    }

    button {
      border: none;
      border-radius: 20px;
      background-color: #490057;
      color: #fff;
      height: 40px;
      padding: 7px 40px;
      margin-top: 18px;
      font-size: 18px;
      margin-bottom: 22px;

      @media screen and (max-device-width: 450px) {
        width: 100%;
        margin-top: 20px;
      }
    }

    @media screen and (max-device-width: 450px) {
      justify-content: center;
    }
  }

  .media {
    display: flex;
    justify-content: start;
    gap: 30px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      color: #490057;
    }

    @media screen and (max-device-width: 450px) {
      flex-wrap: wrap;

      div {
        width: 40%;
      }
    }
  }
`
