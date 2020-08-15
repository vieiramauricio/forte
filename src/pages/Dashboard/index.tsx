import React from 'react';
import Inside from '../../layouts/Inside';
import { useAuth } from '../../context/Auth';
import { Subtitle } from '../../components/Title';
import { Box, TextField } from '@material-ui/core';
import ButtonWrapper from '../../components/Button';


const Dashboard: React.FC = () => {
  const { state } = useAuth();
  return (
    <Inside>
      <Subtitle>
        Bem vindo, <span>{state.username}</span>
      </Subtitle>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={5}>
        <h3>Opiniões recentes:</h3>
        <ButtonWrapper color="primary" size="200px">
          Nova opinião
        </ButtonWrapper>
      </Box>

      <Box display="flex">
        <Box mr={2}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
          />
        </Box>
        <ButtonWrapper color="primary" size="100px">
          Buscar
        </ButtonWrapper>
      </Box>

    </Inside>
  );
};

export default Dashboard;
