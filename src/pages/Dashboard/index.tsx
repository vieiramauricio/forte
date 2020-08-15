import React, { useState, useEffect } from 'react';
import Inside from '../../layouts/Inside';
import { useAuth } from '../../context/Auth';
import { Subtitle } from '../../components/Title';
import { Box, TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ButtonWrapper from '../../components/Button';
import List from '../../components/Opinions/List';
import api from '../../services/api';
import IOpinion from '../../interfaces/Opinion/opinion.interface';


const Dashboard: React.FC = () => {
  const { state } = useAuth();
  // const { token } = state;
  const [opinions, setOpinions] = useState([]);
  const [view, setView] = useState([]);

  const getOpinions = async () =>{
    try{
      const res = await api.get('/opinions');
      setOpinions(res.data.opinions);
      setView(res.data.opinions);
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
        <ButtonWrapper color="primary" size="200px">
          Nova opinião
        </ButtonWrapper>
      </Box>

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
