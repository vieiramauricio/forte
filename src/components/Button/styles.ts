import styled from 'styled-components';

interface ButtonProps {
  color: string;
  size: string;
}

export default styled.button`
  padding: 16px 0;
  text-transform: unset;
  background: ${props => (props.color === 'primary' ? '#88B82F' : '#1D1B27')};
  color: #fcfcfc;
  font-weight: bold;
  width: ${(props: ButtonProps) => props.size};
  display: block;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease-in;

  &:hover {
    background: ${props => (props.color === 'primary' ? '#96BE4B' : '#1F1F1F')};
  }
`;
