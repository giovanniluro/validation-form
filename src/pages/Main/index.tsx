import React from 'react';
import { Container, Body, Header, Content } from './style';
import Form from '../../components/Form';

const Main: React.FC = () => {

  return(
    <Container>
      <Header>

      </Header>
      <Body>
        <Content>
          <Form />
        </Content>
      </Body>
    </Container>
  )
}

export default Main;