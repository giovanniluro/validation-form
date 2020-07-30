import React from 'react';
import { Container } from './style';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social: React.FC = () => {
  return (
    <Container>
      <h2>ValidationForm by Giovanni Luro</h2>
      <div>
        <a href="https://instagram.com/giovanniluro" target="#"><FaInstagram size={20} /></a>
        <a href="https://linkedin.com/in/giovanniluro" target="#"><FaLinkedin size={20} /></a>
        <a href="https://github.com/giovanniluro/validation-form" target="#"><FaGithub size={20} /></a>
      </div>
    </Container>
  )
}

export default Social;