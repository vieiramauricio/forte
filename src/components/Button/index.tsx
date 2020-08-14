import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Button from './styles';

interface ButtonProps {
  color: string;
  size: string;
  loading: boolean;
}

const ButtonWrapper: React.FC<ButtonProps> = props => {
  return (
    <Button {...props}>
      {props.loading ? (
        <CircularProgress size="10px" color="inherit" />
      ) : (
        props.children
      )}
    </Button>
  );
};

export default ButtonWrapper;
