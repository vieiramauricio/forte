import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../pages/Login';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Login Page', () => {
  it('Should be able to login', () => {
    const { debug } = render(<Login />);

    debug();
  });
});
