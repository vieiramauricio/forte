import React from 'react';
import { Nav, Container, Logo } from './styles';
import logo from '../../assets/logo/logo.png';
import ButtonWrapper from '../Button';
import INavbar from '../../interfaces/Navbar/navbar.interface';

const Navbar: React.FC<INavbar> = ({ logout }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <Nav>
      <Container>
        <Logo src={logo} alt="Forte | Logo" />
        {logout && (
          <ButtonWrapper color="primary" size="100px" handle={handleLogout}>
            Sair
          </ButtonWrapper>
        )}
      </Container>
    </Nav>
  );
};

export default Navbar;
