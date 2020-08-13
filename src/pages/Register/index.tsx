import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, FormControl, TextField } from '@material-ui/core';
import Outside from '../../layouts/Outside';
import Title from '../../components/Title';
import ButtonWrapper from '../../components/Button';
import MessageWrapper from '../../components/MessageWrapper';
import ValidateMessage from '../../components/ValidateMessage';
import IFormData from '../../contracts/Form/data.interface';
import api from '../../services/api';

const Register: React.FC = () => {
  const { control, handleSubmit, errors, reset } = useForm();

  const handleForm = async (data: IFormData) => {
    try {
      const res = await api.post('/register', data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Outside>
      <Box component="form" onSubmit={handleSubmit(handleForm)}>
        <Title>
          Pronto para
          <span> melhorar São Paulo?</span>
        </Title>

        <Box component="div">
          <FormControl fullWidth variant="outlined">
            <Controller
              as={TextField}
              type="text"
              name="email"
              label="E-mail"
              variant="outlined"
              control={control}
              defaultValue=""
              rules={{ required: true }}
            />
            <MessageWrapper>
              {errors.email && (
                <ValidateMessage>Campo obrigatório!</ValidateMessage>
              )}
            </MessageWrapper>
          </FormControl>

          <Box component="div" mt={2}>
            <FormControl fullWidth variant="outlined">
              <Controller
                as={TextField}
                type="text"
                name="username"
                label="Usuário"
                variant="outlined"
                control={control}
                defaultValue=""
                rules={{ required: true, minLength: 3, maxLength: 30 }}
                style={
                  errors.user && {
                    borderColor: '#ff0000',
                  }
                }
              />
              <MessageWrapper>
                {errors.user && (
                  <ValidateMessage>
                    Mínimo 3 e máximo 30 caracteres!
                  </ValidateMessage>
                )}
              </MessageWrapper>
            </FormControl>
          </Box>

          <Box component="div" mt={2}>
            <FormControl fullWidth variant="outlined">
              <Controller
                as={TextField}
                type="password"
                name="password"
                label="Senha"
                variant="outlined"
                control={control}
                defaultValue=""
                rules={{ required: true, minLength: 8, maxLength: 30 }}
              />
              <MessageWrapper>
                {errors.password && (
                  <ValidateMessage>
                    Mínimo 8 e máximo 30 caracteres!
                  </ValidateMessage>
                )}
              </MessageWrapper>
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
