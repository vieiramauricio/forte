import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Button from './styles';
import IButton from '../../interfaces/Button/button.interface';

const ButtonWrapper: React.FC<IButton> = props => {
  return (
    <Button {...props} onClick={props.handle}>
      {props.loading ? (
        <CircularProgress size="10px" color="inherit" />
      ) : (
        props.children
      )}
    </Button>
  );
};

export default ButtonWrapper;
