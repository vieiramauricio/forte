import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const Skeletons: React.FC = () =>{
  return(
    <>
      <Skeleton
      animation="wave"
      variant="rect"
      style={{marginTop: '20px', height: '200px'}}
      />
      <Skeleton
        animation="wave"
        variant="rect"
        style={{marginTop: '20px', height: '200px'}}
      />
      <Skeleton
        animation="wave"
        variant="rect"
        style={{marginTop: '20px', height: '200px'}}
      />
  </>
  )
};

export default Skeletons;
