import styled, { css } from 'styled-components';

interface ContainerProps {
  transition: string;
  backwards: string;
  backwardAppear: string;
  forwardAppear: string;
}

interface ProgressProps {
  progress: number;
}

export const Container = styled.div<ContainerProps>`
  padding: 40px;
  height: 98%;
  width: 100%;
  animation: none;
  overflow: auto;
  transition: .4s;

  @media(max-width: 900px) and (max-height: 799px){
    order: 2;
  }


  ${props => props.transition === 'true' && css`
    animation: swipetoleft .3s forwards;
  `}

  ${props => props.backwards === 'true' && css`
    animation: swipetoright .3s;
  `}

  ${props => props.backwardAppear === 'true' && css`
    animation: swipefromleft .4s backwards;
  `}

  ${props => props.forwardAppear === 'true' && css`
    animation: swipefromright .4s backwards;
  `}


  /* Mobile */
  @media(max-width: 450px) {
    padding: 40px 20px;

    form {
      h1{
        font-size: 20px;
      }
      h2 {
        font-size: 18px;
      }

      h4 {
        font-size: 16px;
      }
      h3 {
        font-size: 14px;
      }
    }
  }

  .thanks {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h2 {
      text-align: center;
      padding: 20px;
      font-size: 16px;
    }

    > svg path{
      stroke-dashoffset: 0;
      stroke-dasharray: 100;
      animation: iconshow 1.8s backwards ease-out;
      animation-delay: .8s;
      color: #344966;
    }

    > svg polyline {
      stroke-dashoffset: 0;
      stroke-dasharray: 100;
      animation: iconshow 1s backwards linear;
      animation-delay: 1.3s;
      color: green;
    }

    > button {

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      background: #344966;
      color: white;
      font-weight: bold;
      border: 0;
      width: 40%;
      bottom: 20px;
      font-size: 18px;

      &:focus {
        outline: 0;
      }

      /* Mobile */
      @media(max-width: 450px) {
        width: 100%;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;

    h4 {
      text-align: justify;
    }

    h3 {
      margin-top: 20px;
      font-weight: 500;
      text-align: justify;
    }

    label {
      margin-top: 40px;
      padding: 10px 4px;

      > div {
        display: flex;

        input {
          border: 0;
          border-bottom: 3px solid #344966;
          width: 80%;
          padding: 10px 0;
          transition: .3s;
          font-size: 14px;

          &:focus {
            outline: 0;
            transform: translateY(5px);
          }
        }

        > div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 20px;

          svg {
            display: none;
          }

          p {
            display: none;
            width: 250px;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 50px;
            padding: 20px 10px;
            border-radius: 12px;
            background: #FF9C99;
            font-weight: 600;
            border: 2px solid #FF7570;

          }
        }

        /* Mobile */
        @media(max-width: 450px) {
          input {
            width: 100%;

            &:focus {
              width: 100%;
              transform: translateY(3px);
            }
          }
        }
      }
    }


    .error {
      > div {

        input {
          border-bottom: 2px solid #FF4E47;
          animation: no-no .3s;
        }
        > div {
          position: relative;

          svg {
            display: block;
            animation: fall .8s;
          }

          &:hover {
            p {
              display: flex;
              animation: fadein .4s;
            }
          }
        }
        @media(max-width: 450px) {
          flex-direction: column;
          position: relative;

          > div {
            position: absolute;
            width: 100%;
            margin: 0;
            top: 50px;
            justify-content: flex-start;

            p {
              position: relative;
              display: inline-block;  
              padding: 3px;
              font-size: 12px;
              bottom: 0;
              flex: 1;
              margin-left: 10px;
              text-align: center;
            }
          }
        }
      }    
    }

    > button {

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      background: #344966;
      color: white;
      font-weight: bold;
      border: 0;
      width: 40%;
      bottom: 20px;
      margin-top: auto;

      &:focus {
        outline: 0;
      }

      /* Mobile */
      @media(max-width: 450px) {
        width: 100%;
      }
      
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin: auto 0;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        background: #344966;
        color: white;
        font-weight: bold;
        border: 0;
        width: 40%;
        justify-self: end;
        bottom: 20px;
        margin-top: auto;

        &:focus {
          outline: 0;
        }
      }
    }
  }

  @keyframes no-no {
    0% {
      transform: translateX(0px);
    }
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-10px); 
    }
    100% {
      transform: translateX(0px);
    } 
  }

  @keyframes fadein {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }

  @keyframes fall {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }
    60% {
      transform: translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateY(4px);
    }
    80% {
      transform: translateY(0px); 
    }
    90% {
      transform: translateY(4px);
    }  0% {
      opacity: 0;
      transform: translateY(-80px);
    }
    60% {
      transform: translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateY(4px);
    }
    80% {
      transform: translateY(0px); 
    }
    90% {
      transform: translateY(4px);
    }
    100% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes swipefromright {
    from {
      opacity: 0;
      transform: translateX(50vh);
    } to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes swipefromleft {
    from {
      opacity: 0;
      transform: translateX(-50vh);
    } to {
      opacity: 1;
      transform: translateX(0);
    }
  }



  @keyframes swipetoleft {
    from {
      opacity: 1;
      transform: translateX(0);
    } to {
      opacity: 0;
      transform: translateX(-50vh);
    }
  }

  @keyframes swipetoright {
    from {
      opacity: 1;
      transform: translateX(0);
    } to {
      opacity: 0;
      transform: translateX(50vh);
    }
  }

  @keyframes iconshow {
    from{
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

export const Progress = styled.div<ProgressProps>`
  
  overflow: hidden;
  width: ${props => props.progress * 33.4}%;
  height: 2%;
  transition: .6s;
  background: #344966;

  @media(max-width: 900px) and (max-height: 799px){
    order: 1;
  }
`