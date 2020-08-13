import React from 'react';
import { Box, FormControl, TextField, Button } from '@material-ui/core';
import Outside from '../../layouts/Outside';
import Title from '../../components/Title';

const Login: React.FC = () => {
  return (
    <Outside>
      <Box component="div" m={1}>
        <Title>
          Pronto para
          <span> melhorar São Paulo?</span>
        </Title>

        <Box component="div">
          <FormControl fullWidth variant="outlined">
            <TextField id="nome" label="Usuário" variant="outlined" />
          </FormControl>

          <Box component="div" mt={2}>
            <FormControl fullWidth variant="outlined">
              <TextField id="nome" label="Senha" variant="outlined" />
            </FormControl>
          </Box>

          <Box component="div" mt={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: '10px 0' }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Outside>
  );
};

export default Login;
