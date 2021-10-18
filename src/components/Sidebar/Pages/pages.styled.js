import styled from 'styled-components'

export const StyledPages = styled.div`
  border-radius: 13px;
  width: 90%;
  background-color: #fff;
  margin-bottom: 50px;
  /* height: 100px; */

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
    padding: 10px 20px;
    /* width: 100px; */
    /* height: 28px; */
    font-size: 0.9rem;
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
    position: relative;
    height: 78px;
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
    justify-content: space-between;
    height: 80%;
    gap: 0;
    /* margin-left: 85px; */

    .font {
      cursor: pointer;
    }
  }

  .modal {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 8px #00000021;
    border-radius: 8px;
    padding: 10px 20px;
    position: absolute;

    top: 30px;
    z-index: 1000;
    display: ${props => (props.open ? 'block' : 'none')};

    p {
      margin: 0;
    }

    @media screen and (max-width: 450px) {
      right: 00px;
    }
  }
`
