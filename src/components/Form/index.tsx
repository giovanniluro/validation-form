import React, { useState, useRef, useCallback } from 'react';
import { Container } from './style';
import { FiAlertCircle } from 'react-icons/fi';


const Form: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const inputName = useRef<HTMLLabelElement>(null);
  const inputEmail = useRef<HTMLLabelElement>(null);
  const [page, setPage] = useState(1);

  const handleFirstSubmit = useCallback((e) => {
    e.preventDefault();
    let err = 0;
    inputName.current?.classList.remove('error');
    inputEmail.current?.classList.remove('error');

    if (name.length === 0) {
      inputName.current?.classList.add('error');
      err++;
    }

    if (email.split('@').length !== 2) {
      inputEmail.current?.classList.add('error');
      err++;
    }

    if (err === 0) setPage(2);

  }, [name, email]);

  return (
    <Container>
      {page === 1 &&
        <form onSubmit={handleFirstSubmit}>
          <h2>Bem vindo(a), vamos começar!</h2>

          <label ref={inputName}>
            <h4>Digite o seu nome:</h4>
            <div>
              <input type="text" value={name} onChange={e => setName(e.target.value)} />
              <div>
                <FiAlertCircle size={20} color="#FF4E47" />
                <p>Este campo é obrigatório</p>
              </div>
            </div>
          </label>

          <label ref={inputEmail}>
            <h4>Digite o seu E-mail:</h4>
            <div>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
              <div>
                <FiAlertCircle size={20} color="#FF4E47" />
                <p>Insira um E-mail válido!</p>
              </div>
            </div>
          </label>

          <button type='submit' > Próximo </button>
        </form>}
    </Container>
  )

}

export default Form;