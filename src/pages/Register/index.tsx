import React from 'react';
import { Box, FormControl, TextField } from '@material-ui/core';
import Outside from '../../layouts/Outside';
import Title from '../../components/Title';
import ButtonWrapper from '../../components/Button';

const Register: React.FC = () => {
  return (
    <Outside>
      <Box component="div" m={1}>
        <Title>
          Pronto para
          <span> melhorar São Paulo?</span>
        </Title>

        <Box component="div">
          <FormControl fullWidth variant="outlined">
            <TextField
              type="email"
              id="email"
              label="E-mail"
              variant="outlined"
            />
          </FormControl>

          <Box component="div" mt={2}>
            <FormControl fullWidth variant="outlined">
              <TextField
                type="text"
                id="user"
                label="Usuário"
                variant="outlined"
              />
            </FormControl>
          </Box>

          <Box component="div" mt={2}>
            <FormControl fullWidth variant="outlined">
              <TextField
                type="password"
                id="password"
                label="Senha"
                variant="outlined"
              />
            </FormControl>
          </Box>

          <Box component="div" mt={2}>
            <ButtonWrapper color="primary" size="100%">
              Cadastrar
            </ButtonWrapper>
          </Box>
        </Box>
      </Box>
    </Outside>
  );
};

export default Register;
