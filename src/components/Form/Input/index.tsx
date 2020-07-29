import React, { useCallback, useEffect, useState } from 'react';
import { Container } from './style';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps {
  name: string;
  placeholder: string;
  state: {
    value: string;
    setValue: (value: string) => void;
  };
  validate: {
    value: boolean;
    setValue: (value: boolean) => void;
  }
}

const Input: React.FC<InputProps> = ({ name, placeholder, validate, state }) => {

  const [error, setError] = useState('false');
  const [tip, setTip] = useState('');

  //Validando campos!
  useEffect(() => {
    if (validate.value) {
      switch (name) {
        case 'Seu nome':
          if (state.value.length === 0) {
            setError('true');
            setTip('Este campo é obrigatório!');
          }
          else setError('false');
          return;

        case 'Seu e-mail':
          const parts = state.value.split('@');
          if (parts.length !== 2) {
            setError('true');
            setTip('Insira um e-mail válido!');
            break;
          }
          if (parts) {
            const dots = parts[1].split('.');
            if (dots.length >= 2) {
              setError('false');
              return;
            }
          }
          setError('true');
          break;
      }
      console.log('a');
      validate.setValue(false);
    }
  }, [validate.value]);

  const handleChange = useCallback((e) => {
    state.setValue(e.target.value);
  }, []);

  return (
    <Container error={error}>
      <h4>{name}</h4>
      <div>
        <input type='text' placeholder={placeholder} onChange={e => handleChange(e)} value={state.value} />
        {error === 'true' &&
          <div>
            <FiAlertCircle size={20} color="red" />
            <div>
              {tip}
            </div>
          </div>}
      </div>
    </Container>
  )

}

export default Input;