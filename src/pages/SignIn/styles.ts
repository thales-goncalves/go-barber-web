import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import bgImage from '../../assets/png/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 700px;
  width: 100%;
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px)
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      display: block;
      color: #f4ede8;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    color: #ff9900;

    svg {
      margin-right: 12px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9900')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bgImage}) no-repeat center;
  background-size: cover;
`;
