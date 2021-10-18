import styled from 'styled-components'

export const StyledPost = styled.div`
  display: flex;
  gap: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 28px;
  margin-top: 40px;
  padding: 30px;

  p {
    color: #787878;
  }

  .post-img {
    width: 50%;
    object-fit: cover;
  }

  .post-header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    h4 {
      font: normal normal 19px/16px Work Sans;
      letter-spacing: 0px;
      color: #490057;
      margin: 0;
      padding-bottom: 0;
    }

    p {
      margin: 0;
      font-size: 12px;
      display: flex;
      /* justify-content: space-between; */
      gap: 20px;
    }
  }

  .post-content {
    font-size: 15px;
    margin-bottom: 0.5rem;
  }

  .comments {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;

    h6 {
      margin-top: 0;
      color: #787878;
      margin-bottom: 0.7rem;
    }

    .comment-header {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }

      h5 {
        font: normal normal 15px Work Sans;
        letter-spacing: 0px;
        color: #490057;
        margin: 0;
        padding: 0;
      }

      p {
        margin: 0;
        padding: 0;
        font-size: 0.6rem;
      }
    }

    p {
      font-size: 0.7rem;
    }
  }

  .cta {
    display: flex;
    justify-content: space-between;
    color: #490057;
    font-size: 1.5rem;

    div {
      width: 30%;
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (max-device-width: 450px) {
    flex-wrap: wrap;
    margin-bottom: 40px;

    .post-img {
      width: 100%;
    }
  }
`
