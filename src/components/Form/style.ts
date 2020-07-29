import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  overflow: hidden;
  height: 100%;

  /* Mobile */
  @media(max-width: 450px) {
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;

    label {
      margin-top: 40px;
      padding: 10px 4px;

      > div {
        display: flex;

        input {
          border: 0;
          border-bottom: 3px solid #344966;
          width: 70%;
          padding: 10px 0;
          transition: .3s;
          font-size: 14px;

          &:focus {
            outline: 0;
            width: 80%;
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
      }    
    }

    button {
      padding: 20px 0;
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

      /* Mobile */
      @media(max-width: 450px) {
        width: 100%;
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
  }
  100% {
    transform: translateY(0);
  }
}



`