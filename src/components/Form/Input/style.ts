import styled, { css } from 'styled-components';

interface InputProps {
  error: string;
}

export const Container = styled.label<InputProps>`
    padding: 20px 0;
    display: flex;
    flex-direction: column; 
    position: relative;

    h4 {
      margin-bottom: 10px;
    }

    > div {
      display: flex;

      ${props => props.error === 'true' && css ` 
        animation: no-no .6s;
      `}

      input {
        padding: 8px 5px;
        width: 60%;
        border: 0;
        outline: 0;
        font-size: 14px;  
        border-bottom: 2px solid #344966;
        transition: .4s;
    
        ${props => props.error === 'true' && css`
          border-bottom: 2px solid #F9A38B;
        `}

        &:focus {
          outline: 0;
          width: 65%;
        }
      }

      > div { 
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg {
          margin-left: 10px;
          position: relative;
        }

        &:hover {
          > div {
            display: block;
            animation: fadein .8s;
          }
        }

        > div {          
          display: none;
          position: absolute;
          bottom: 40px;
          background: #F9A38B;
          padding: 10px;
          width: 500%;
          border-radius: 10px;
        }
      }
    }

    @keyframes no-no {
      from {
        transform: translateX(0);
      } 25% {
        transform: translateX(-30px);
      } 50% {
        transform: translateX(30px);
      } 75% {
        transform: translateX(-30px);
      } to {
        transform: translateX(0);
      }
    }

    @keyframes fadein {
      from {
        opacity: 0;
      } to {
        opacity: 1;
      }
    }   
`