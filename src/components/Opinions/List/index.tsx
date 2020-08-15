import React from 'react';
import Item from '../Item';
import IOpinionList from '../../../interfaces/Opinion/opinionList.interface';

const List: React.FC<IOpinionList> = ({opinionList}) => {
  return (
    <ul>
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
    </ul>
  );
}

export default List;
