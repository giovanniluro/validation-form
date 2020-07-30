import styled, { css } from 'styled-components';

//Pallete - https://coolors.co/0d1821-344966-b4cded-f0f4ef-bfcc94

interface ContentProps {
  newForm: string;
}

export const Container = styled.div`
  height: 100%;
  width: 100%;
`

export const Header = styled.div`
  background: #344966;
  height: 20%;

  /* Mobile */
  @media(max-width: 450px) {
    height: 15%;
  }
`

export const Body = styled.div`
  background: #E8EEE7;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* Mobile */
  @media(max-width: 450px) {
    height: 85%;
  }
`

export const Content = styled.div<ContentProps>`
  background: white;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  min-width: 70%;
  margin-top: -40px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,0.3);
  animation: popup .8s;
  overflow: hidden;

  ${props => props.newForm === 'true' && css `
    animation: popdown .8s;
  `}

  /* Mobile */
  @media(max-width: 450px) {
    width: 90%;
    overflow: hidden;
    border-radius: 14px;
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

  @keyframes popdown {
    from {
      opacity: 1;
      transform: translateY(0);
    } 40% {
      opacity: 1;
      transform: translateY(-80px);
    }
    to {
      opacity: 0;
      transform: translateY(50vh);
    }
  }

`