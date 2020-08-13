import styled from 'styled-components';

export const CallToPage = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 20px;
  span {
    color: #16d32c;
    /* text-decoration: underline; */
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      color: #0eba22;
    }
  }
`;
export const MessageWrapper = styled.div`
  padding: 3px 0;
  position: relative;
`;
export const ValidateMessage = styled.span`
  display: block;
  /* font-weight: bold; */
  color: #ff0000;
  position: absolute;
  text-align: center;
  font-size: 12px;
`;
