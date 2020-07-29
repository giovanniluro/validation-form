import styled from 'styled-components'; 

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  overflow: hidden;

  @media(max-width: 450px) {
    padding: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    animation: left .5s backwards;
    animation-delay: .7s;

    button {
      margin-top: 40px;
      background: #344966;
      border: 0;
      color: white;
      padding: 10px 0;
      font-size: 18px;
      align-self: center;
      width: 40%;

      &:focus {
        outline: 0;
      }
    }
  }

  @keyframes left {
    from {
      opacity: 0;
      transform: translateX(50vw);
    } to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`