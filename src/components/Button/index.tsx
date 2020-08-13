import React from 'react';
import Button from './styles';

interface ButtonProps {
  color: string;
  size: string;
}

const ButtonWrapper: React.FC<ButtonProps> = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonWrapper;
