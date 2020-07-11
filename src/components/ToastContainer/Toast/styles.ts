import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'warning' | 'error' | 'info';
  hasDescription: boolean;
}

const toastPropsVariations = {
  info: css`
    color: #3172b7;
    background: #ebf8ff;
  `,
  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background: #fddede;
  `,
  warning: css`
    color: #a68700;
    background: #fffae5;
  `,
};

export const Container = styled(animated.div) <ToastProps>`
  width: 360px;
  padding: 16px 30px 16px 16px;
  position: relative;
  border-radius: 16px;
  display: flex;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${props => toastPropsVariations[props.type || 'info']}

  > svg {
    margin: 4px 16px 0 0;
  }

  & + div {
    margin-top: 8px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 12px;
      line-height: 20px;
      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    width: 30px;
    height: 30px;
    top: -10px;
    right: -10px;
    border: 0;
    background: inherit;
    padding: 5px;
    border-radius: 50%;
    color: inherit;

    svg {
      position: relative;
    }
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
