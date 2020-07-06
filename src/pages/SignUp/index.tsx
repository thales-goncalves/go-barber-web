import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import logoImage from '../../assets/svg/logo.svg';

import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImage} alt="logo" />

        <form>
          <h1>Faça seu cadastro</h1>
          <InputField
            name="nome"
            icon={FiUser}
            type="text"
            placeholder="Nome"
          />
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

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="/">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
