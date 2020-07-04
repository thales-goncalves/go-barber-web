import React from 'react';

import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import logoImage from '../../assets/svg/logo.svg';

import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImage} alt="logo" />

        <form>
          <h1>Faça seu Logon</h1>
          <InputField
            name="email"
            icon={FiMail}
            type="text"
            placeholder="Email"
          />
          <InputField
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
          <a href="test">Esqueci minha senha</a>
        </form>

        <a href="tste">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
