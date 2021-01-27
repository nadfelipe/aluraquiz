import styled from 'styled-components';
import React, { useContext } from 'react';
import ThemeContext from '../../contexts/Theme';

// eslint-disable-next-line import/prefer-default-export
export function ThemeSelect() {
  const { switchTheme } = useContext(ThemeContext);

  return (
    <CheckBoxWrapper>
      <CheckBox id="switch-flat" type="checkbox" onClick={switchTheme} />
      <CheckBoxLabel for="switch-flat" />
    </CheckBoxWrapper>
  );
}

const CheckBoxWrapper = styled.div`
  position: relative;
  align-self: center;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.colors.contrastText};;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.primary};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
