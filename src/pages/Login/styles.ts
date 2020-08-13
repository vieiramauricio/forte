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
