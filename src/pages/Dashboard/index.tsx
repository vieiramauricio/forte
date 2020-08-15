import React, { useState, useEffect } from 'react';
import Inside from '../../layouts/Inside';
import { useAuth } from '../../context/Auth';
import { Subtitle } from '../../components/Title';
import { Box, TextField } from '@material-ui/core';
import ButtonWrapper from '../../components/Button';
import List from '../../components/Opinions/List';
import api from '../../services/api';


const Dashboard: React.FC = () => {
  const { state } = useAuth();
  const { token } = state;
  const [opinions, setOpinions] = useState([]);

  const getOpinions =  async () =>{
    try{
      const res = await api.get('/opinions');
      setOpinions(res.data.opinions);
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    getOpinions();
  }, [])

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

      <Box>
        <List opinionList={opinions}/>
      </Box>

    </Inside>
  );
};

export default Dashboard;
