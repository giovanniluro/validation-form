import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Container, Progress } from './style';
import { FiCheckCircle, FiAlertCircle, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { MdInsertEmoticon } from 'react-icons/md';


interface FormProps {
  newForm: (newForm: string) => void;
  formProps: {
    id: string;
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    page: number;
  }
}

const Form: React.FC<FormProps> = ({ newForm, formProps }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const inputName = useRef<HTMLLabelElement>(null);
  const inputEmail = useRef<HTMLLabelElement>(null);
  const inputPassword = useRef<HTMLLabelElement>(null);
  const inputPasswordConfirmation = useRef<HTMLLabelElement>(null);
  const [page, setPage] = useState(1);
  const [transition, setTransition] = useState('false');
  const [backwards, setBackwards] = useState('false');
  const [backwardAppear, setBackwardAppear] = useState('false');
  const [forwardAppear, setForwardAppear] = useState('true');

  useEffect(() => {
    setName(formProps.name);
    setPassword(formProps.password);
    setEmail(formProps.email);
    setPage(formProps.page);
    setPasswordConfirmation(formProps.passwordConfirmation);
  }, [formProps]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(e);
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
      } else if (email.split('@')[1].split('.').length < 2) {
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
        console.log(password.length);
        inputPassword.current?.classList.add('error');
        err++;
      }

      if (password !== passwordConfirmation) {
        console.log(passwordConfirmation, password);
        inputPasswordConfirmation.current?.classList.add('error');
        err++;
      }

      if (err === 0) {
        setTransition('true');
      }
    }


  }, [name, email, page, password, passwordConfirmation]);

  const handlePageTransition = useCallback((e) => {
    if (e.animationName === 'swipetoleft') {
      setTransition('false');
      setForwardAppear('true');
      setPage(page => page + 1);
    }

    if (e.animationName === 'swipetoright') {
      setBackwards('false');
      setBackwardAppear('true');
      setPage(page => page - 1);
    }

    if (e.animationName === 'swipefromleft') {
      setBackwardAppear('false');
    }

    if (e.animationName === 'swipefromright') {
      setForwardAppear('false');
    }
  }, []);

  const handleDone = useCallback(() => {
    newForm('true');
  }, [newForm]);

  return (
    <>
      <Container forwardAppear={forwardAppear} backwardAppear={backwardAppear} backwards={backwards} transition={transition} onAnimationEnd={handlePageTransition}>
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

            <button type='submit' > Próximo <FiArrowRight size={30} /> </button>
          </form>
        }
        {page === 2 &&
          <form onSubmit={handleSubmit}>
            <h2> Oi {name.split(' ')[0]}, que bom ver você aqui! <MdInsertEmoticon /></h2>
            <h3> Agora precisamos de uma senha! Lembre-se, sua senha precisa ter no mínimo 6 dígitos</h3>

            <label ref={inputPassword}>
              <h4>Sua senha:</h4>
              <div>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <div>
                  <FiAlertCircle size={20} color="#FF4E47" />
                  <p>Sua senha deve ter no mínimo 6 dígitos!</p>
                </div>
              </div>
            </label>

            <label ref={inputPasswordConfirmation}>
              <h4>Sua senha:</h4>
              <div>
                <input type='password' value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
                <div>
                  <FiAlertCircle size={20} color="#FF4E47" />
                  <p>As senhas devem ser iguais</p>
                </div>
              </div>
            </label>

            <div className="buttons">
              <button type="button" onClick={() => setBackwards('true')}><FiArrowLeft size={30} />Anterior</button>
              <button type="submit"> Próximo <FiArrowRight size={30} /> </button>
            </div>
          </form>
        }
        {page === 3 &&
          <div className="thanks">
            <FiCheckCircle size={150} />
            <h2>Prontinho {name.split(' ')[0]}, o seu cadastro foi finalizado! ;)</h2>
            <button onClick={handleDone}>Voltar</button>
          </div>
        }
      </Container>
      <Progress progress={page} />
    </>
  );

}

export default Form;