import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, FormControl, TextField } from '@material-ui/core';
import { Link, RouteComponentProps } from 'react-router-dom';
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

type PropsInterface = RouteComponentProps<any>;

const Register: React.FC<PropsInterface> = ({ history }) => {
  const { control, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const handleForm = async (data: IFormData) => {
    setLoading(true);
    try {
      const res = await api.post('/register', data);

      toast.success('Cadastrado com sucesso');

      history.push('/');
    } catch (e) {
      toast.error('Algo deu errado...');
      reset();
    }
    setLoading(false);
  };
  return (
    <Outside>
      <Box component="form" onSubmit={handleSubmit(handleForm)}>
        <PrincipalTitle>
          Vem com a gente <span>melhorar</span> a nossa cidade!
        </PrincipalTitle>

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
                {errors.username && (
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
            <ButtonWrapper color="primary" size="100%" loading={loading}>
              Cadastrar
            </ButtonWrapper>
          </Box>

          <CallToPage>
            Já tem cadastro?
            <Link to="/">
              <span> clique aqui!</span>
            </Link>
          </CallToPage>
        </Box>
      </Box>
    </Outside>
  );
};

export default Register;
