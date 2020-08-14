/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';
import Navbar from '../../components/Navbar';

const Inside: React.FC = ({ children }) => {
  return (
    <>
      <Navbar logout />
      <Container>{children}</Container>
    </>
  );
};

export default Inside;
