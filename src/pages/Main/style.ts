import styled from 'styled-components';

//Pallete - https://coolors.co/0d1821-344966-b4cded-f0f4ef-bfcc94

export const Container = styled.div`
  height: 100%;
  width: 100%;
`

export const Header = styled.div`
  background: #344966;
  height: 30%;

  /* Mobile */
  @media(max-width: 450px) {
    height: 15%;
  }
`

export const Body = styled.div`
  background: #E8EEE7;
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* Mobile */
  @media(max-width: 450px) {
    height: 85%;
  }
`

export const Content = styled.div`
  background: white;
  max-height: 90%;
  min-width: 40%;
  margin-top: -40px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,0.3);
  animation: popup .8s;
  overflow: hidden;
  
  /* Mobile */
  @media(max-width: 450px) {
    width: 80%;
    overflow: auto;
  }

  @keyframes popup {
    from {
      opacity: 0;
      transform: translateY(50vh);
    } 40% {
      opacity: 1;
      transform: translateY(-80px);
    }
    to {
      transform: translateY(0);
    }
  }

`