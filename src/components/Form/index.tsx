import React, { useState, useRef, useCallback } from 'react';
import { Container, Progress } from './style';
import { FiAlertCircle } from 'react-icons/fi';
import { MdInsertEmoticon } from 'react-icons/md';


const Form: React.FC = () => {

  const [name, setName] = useState('Lucas');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const inputName = useRef<HTMLLabelElement>(null);
  const inputEmail = useRef<HTMLLabelElement>(null);
  const inputPassword = useRef<HTMLLabelElement>(null);
  const inputPasswordConfirmation = useRef<HTMLLabelElement>(null);
  const [page, setPage] = useState(2);
  const [transition, setTransition] = useState('false');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (page === 1) {
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

      if (err === 0) {
        setTransition('true');
      }
    }

    if (page === 2) {
      let err = 0;
      inputPassword.current?.classList.remove('error');
      inputPasswordConfirmation.current?.classList.remove('error');

      if (password.length < 6) {
        inputPassword.current?.classList.add('error');
        err++;
      }

      if (email.split('@').length !== 2) {
        inputPasswordConfirmation.current?.classList.add('error');
        err++;
      }

      if (err === 0) {
        setTransition('true');
      }


    }


  }, [name, email]);

  const handlePageTransition = useCallback((e) => {
    if (e.animationName === 'swipetoleft') {
      setTransition('false');
      setPage(page => page + 1);
    }
  }, []);

  return (
    <>
      <Container transition={transition} onAnimationEnd={handlePageTransition}>
        {page === 1 &&
          <form onSubmit={handleSubmit}>
            <h2>Bem vindo(a), vamos começar!</h2>

            <label ref={inputName}>
              <h4>Digite o seu nome:</h4>
              <div>
                <input type="text" value={name} onChange={e => {
                  if (e.target.value !== '') {
                    setName(e.target.value[0].toUpperCase() + e.target.value.slice(1));
                  } else {
                    setName('');
                  }
                }} />
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
          </form>
        }
        {page === 2 &&
          <form onSubmit={handleSubmit}>
            <h2> Oi {name.split(' ')[0]}, que bom ver você aqui! <MdInsertEmoticon /></h2>
            <h3> Agora precisamos de uma senha! Lembre-se, sua senha precisa ter no mínimo 6 dígitos</h3>

            <label ref={inputPassword}>
              <h4>Sua senha:</h4>
              <div>
                <input type='password' />
                <div>
                  <FiAlertCircle size={20} color="#FF4E47" />
                  <p>Sua senha deve ter no mínimo 6 dígitos!</p>
                </div>
              </div>
            </label>

            <label ref={inputPasswordConfirmation}>
              <h4>Sua senha:</h4>
              <div>
                <input type='password' />
                <div>
                  <FiAlertCircle size={20} color="#FF4E47" />
                  <p>As senhas devem ser iguais</p>
                </div>
              </div>
            </label>

            <button> Próximo </button>
          </form>
        }
      </Container>
      <Progress progress={page} />
    </>
  );

}

export default Form;