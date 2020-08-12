/* eslint-disable react/prop-types */
import React from 'react';
import { ReactComponent as Illustration } from '../../assets/img/svg-growth.svg';
import { Container } from './styles';

const Outside: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="row">{children}</div>

      <div className="row">
        <Illustration />
      </div>
    </Container>
  );
};

export default Outside;
