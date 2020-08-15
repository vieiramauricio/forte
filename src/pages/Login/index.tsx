import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Box, FormControl, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';

import Outside from '../../layouts/Outside';
import { PrincipalTitle } from '../../components/Title';
import ButtonWrapper from '../../components/Button';
import {
  MessageWrapper,
  ValidateMessage,
  CallToPage,
} from '../../components/Message';

import IFormData from '../../interfaces/Form/data.interface';
import api from '../../services/api';

import { useAuth } from '../../context/Auth';
import { login } from '../../context/Auth/actions';

const Login: React.FC = () => {
  const { control, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useAuth();

  const handleForm = async (data: IFormData) => {
    setLoading(true);
    try {
      const res = await api.post('/login', data);
      if (res.data.token && data.username) {
        login(dispatch, {
          username: data.username.toString(),
          token: res.data.token,
          signed: true,
        });
      }
    } catch (e) {
      toast.error('Algo deu errado...');
      reset();
    }
    setLoading(false);
  };

  return (
    <Outside>
      <Box component="div" m={1}>
        <PrincipalTitle>
          Pronto para melhorar
          <span> São Paulo</span>?
        </PrincipalTitle>

        <Box component="form" onSubmit={handleSubmit(handleForm)}>
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
            />
            <MessageWrapper>
              {errors.username && (
                <ValidateMessage>
                  Mínimo 3 e máximo 30 caracteres!
                </ValidateMessage>
              )}
            </MessageWrapper>
          </FormControl>

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

          <Box component="div" mt={2} mb={1}>
            <ButtonWrapper color="primary" size="100%" loading={loading}>
              Login
            </ButtonWrapper>
          </Box>
        </Box>

        <CallToPage>
          Não tem cadastro ainda?
          <Link to="/register">
            <span> clique aqui!</span>
          </Link>
        </CallToPage>
      </Box>
    </Outside>
  );
};

export default Login;
