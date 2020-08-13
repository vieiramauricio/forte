import { Dispatch } from 'react';
import { ILogin, IAuth } from '../../interfaces/Auth/Action/login.interface';

export const login = (dispatch: Dispatch<ILogin>, payload: IAuth) => {
  dispatch({
    type: 'LOGIN',
    payload,
  });
};
