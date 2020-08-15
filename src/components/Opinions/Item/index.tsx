import React from 'react';
import IOpinion from '../../../interfaces/Opinion/opinion.interface';
import { Box } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

import { Container, Upvote, Title, Header } from './style';

const ReactMarkdown = require('react-markdown');


const Item: React.FC <IOpinion>= ({id, title, content, upvotes_count}) => {
  return (
    <Container>
      <Upvote>
        <ArrowUpward fontSize="large"/>
        <span>{upvotes_count}</span>
      </Upvote>
      <Box>
        <Header>
          <Title>
            {title}
          </Title>
        </Header>
        <Box>
          <ReactMarkdown source={content}/>
        </Box>
      </Box>
    </Container>
  );
}

export default Item;
