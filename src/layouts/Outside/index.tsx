import React from 'react';
import { ReactComponent as Illustration } from '../../assets/img/svg-growth.svg';
import { Container } from './styles';
import Navbar from '../../components/Navbar';

const Outside: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="row">{children}</div>

        <div className="row">
          <Illustration />
        </div>
      </Container>
    </>
  );
};

export default Outside;
