import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Inside from '../../layouts/Inside';
import { useAuth } from '../../context/Auth';
import { Subtitle } from '../../components/Title';
import { Box, TextField, InputAdornment, Modal, Backdrop, Fade, FormControl, TextareaAutosize } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ButtonWrapper from '../../components/Button';
import { ModalWrapper } from '../../components/Modal';
import List from '../../components/Opinions/List';
import api from '../../services/api';
import IOpinion from '../../interfaces/Opinion/opinion.interface';
import IOpinionData from '../../interfaces/Form/dataOpinion.interface';
import {
  MessageWrapper,
  ValidateMessage
} from '../../components/Message';
import { toast } from 'react-toastify';


const Dashboard: React.FC = () => {
  const { control, handleSubmit, errors } = useForm();
  const { state } = useAuth();
  const { token } = state;
  const [opinions, setOpinions] = useState([]);
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const getOpinions = async () =>{
    try{
      const res = await api.get('/opinions');
      const opinionsReversed = res.data.opinions.reverse();
      setOpinions(opinionsReversed);
      setView(opinionsReversed);
    }catch(e){
      console.log(e)
    }
  }

  const handleFilter = (title: string) => {
    const opinionsFiltered = opinions.filter((item: IOpinion) => {
      return(
        item.title.toLowerCase().includes(title)
      )
    });
    setView(opinionsFiltered);
  };

  const handleForm = async (data: IOpinionData) => {
    setLoading(true);
    try{
      const res = await api.post<{data: IOpinion}>('/opinions', data, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
      toast.success('Opinião criada!');
      getOpinions();
    }catch(e){
      toast.error('Algo deu errado...');
    }
    setLoading(false);
    setOpen(false);
  };

  useEffect(() => {
    getOpinions();
  }, []);


  return (
    <Inside>
      <Subtitle>
        Bem vindo, <span>{state.username}</span>
      </Subtitle>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={5}>
        <h3>Opiniões recentes:</h3>
        <ButtonWrapper color="primary" size="200px" handle={() => setOpen(true)}>
          Nova opinião
        </ButtonWrapper>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalWrapper>
            <Subtitle>
              O que gostaria de <span>opinar</span>?
            </Subtitle>

            <Box component="form" onSubmit={handleSubmit(handleForm)}>
              <FormControl fullWidth variant="outlined">
                <Controller
                  as={TextField}
                  type="text"
                  name="title"
                  label="Título"
                  variant="outlined"
                  control={control}
                  defaultValue=""
                  rules={{ required: true, minLength: 3, maxLength: 100 }}
                />
                <MessageWrapper>
                  {errors.title && (
                    <ValidateMessage>
                      Mínimo 3 e máximo 100 caracteres!
                    </ValidateMessage>
                  )}
                </MessageWrapper>
              </FormControl>
              <Box component="div" mt={2}>
                <FormControl fullWidth variant="outlined">
                  <Controller
                    as={TextareaAutosize}
                    aria-label="Conteúdo"
                    name="content"
                    control={control}
                    placeholder="Conteúdo"
                    rowsMin="10"
                    defaultValue=""
                    style={{padding: '8px'}}
                    rules={{ required: true, minLength: 3}}
                  />
                  <MessageWrapper>
                    {errors.content && (
                      <ValidateMessage>
                        Mínimo 3 caracteres!
                      </ValidateMessage>
                    )}
                  </MessageWrapper>
                </FormControl>
              </Box>
              <Box component="div" mt={2} mb={1}>
                <ButtonWrapper color="primary" size="100%" loading={loading}>
                  Adicionar
                </ButtonWrapper>
              </Box>
            </Box>

          </ModalWrapper>
        </Fade>
      </Modal>

      <Box display="flex">
      <Box mr={1}>
          <TextField
            label="Título"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleFilter(e.target.value)}
          />
        </Box>
      </Box>

      <Box>
        <List opinionList={view}/>
      </Box>

    </Inside>
  );
};

export default Dashboard;
