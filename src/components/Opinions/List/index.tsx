import React from 'react';
import Item from '../Item';
import IOpinionList from '../../../interfaces/Opinion/opinionList.interface';
import { Fade, Slide } from "react-awesome-reveal";

const List: React.FC<IOpinionList> = ({opinionList}) => {
  return (
    <ul>
      <Fade>
        {opinionList.map(({id, title, content, upvotes_count })=> {
          return(
            <Item
              id={id}
              title={title}
              content={content}
              upvotes_count={upvotes_count}
              key={id}
            />
          )
        })}
      </Fade>
    </ul>
  );
}

export default List;
