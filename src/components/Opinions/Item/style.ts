import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  margin: 40px 0;
`;

export const Upvote = styled.div`
  padding: 8px;
  margin-right: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  flex-direction: column;

  & > span {
    display: block;
    color: #808080;
    font-weight: bold;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #88B82F;
`;

export const Header = styled.div`
  padding-bottom: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eeeeee;
`;
