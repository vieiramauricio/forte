import React from 'react';
import IOpinion from '../../../interfaces/Opinion/opinion.interface';
import { Box, TextField } from '@material-ui/core';

// import { Container } from './styles';

const Item: React.FC <IOpinion>= ({id, title, content, upvotes_count}) => {
  return (
    <Box>
      <Box>{upvotes_count}</Box>
      <Box>
        <Box>
          {title}
        </Box>
        <Box>
          {content}
        </Box>
      </Box>
    </Box>
  );
}

export default Item;
