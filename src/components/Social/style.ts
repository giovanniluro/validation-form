import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  color: #fff;

  h2 {
    font-weight: 500;
    font-size: 18px;
  }

  > div {

    a {
      cursor: pointer;
      text-decoration: none;
      color: #fff;

      &:hover svg{
        transform: scale(1.15);
      }
    }

    svg {
      margin: 0px 15px;
      transition: .3s;
    }

  }
`