import styled from 'styled-components'

export const StyledCreatePost = styled.div`
  background-color: #fff;
  margin-top: 60px;
  padding: 30px;
  border: 1px solid #70707078;
  border-radius: 30px;

  form {
    /* width: 90%; */
    /* margin: 0 auto; */
    display: flex;
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

    img {
      filter: invert(0.4) sepia(0.5) saturate(20) hue-rotate(248.4deg)
        brightness(0.81);
      height: 18px;
    }
  }
`
