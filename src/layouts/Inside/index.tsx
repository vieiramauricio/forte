/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';

const Inside: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Inside;
