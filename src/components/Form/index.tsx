import React, { useCallback, useState } from 'react';
import { Container } from './style';
import Input from './Input';

const Form: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [validate, setValidate] = useState(false);

  const handleFirstSubmit = useCallback((e) => {
    e.preventDefault();
    setValidate(true);
    
  }, [name, email]);

  return (
    <Container>
      <form onSubmit={handleFirstSubmit}>
        <h3>Bem-vindo(a), Vamos começar!</h3>
        <Input name='Seu nome' validate={{value:validate, setValue: setValidate}} placeholder='Fulano da Silva' state={{value: name, setValue: setName}}/>
        <Input name='Seu e-mail' validate={{value:validate, setValue: setValidate}} placeholder='fulano@gmail.com' state={{value: email, setValue: setEmail}} />
        <button type="submit">Enviar!</button>
      </form>
    </Container>
  )

}

export default Form;