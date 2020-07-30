import React, { useState, useCallback, useEffect } from 'react';
import { Container, Body, Header, Content } from './style';
import Form from '../../components/Form';
import { uuid } from 'uuidv4';
import Social from '../../components/Social';

interface FormData {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  page: number;
}

const Main: React.FC = () => {

  const [newForm, setNewForm] = useState('false');
  const [formData, setFormData] = useState<FormData>({
    id: uuid(),
    email: '',
    name: '',
    password: '',
    passwordConfirmation: '',
    page: 2
  });

  const handleNewForm = useCallback((e) => {

    if (e.animationName === 'popdown') {
      setFormData({
        id: uuid(),
        email: '',
        name: '',
        password: '',
        passwordConfirmation: '',
        page: 1
      });

      setNewForm('false');
    }

  }, [setFormData, setNewForm]);

  useEffect(() => {
    console.log(formData.page);
  }, [formData]);

  return (
    <Container>
      <Header>
        <Social />
      </Header>
      <Body>
        <Content newForm={newForm} onAnimationEnd={handleNewForm}>
          <Form newForm={setNewForm} formProps={formData} />
        </Content>
      </Body>
    </Container>
  )
}

export default Main;