import React from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImage from '../../assets/svg/logo.svg';

import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <img src={logoImage} alt="logo" />

        <Form onSubmit={handleSubmit}>
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
        </Form>

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
