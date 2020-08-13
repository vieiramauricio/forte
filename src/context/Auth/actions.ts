import { Dispatch } from 'react';
import { ILogin, IAuth } from '../../contracts/Auth/Action/login.interface';

export const login = (dispatch: Dispatch<ILogin>, payload: IAuth) => {
  dispatch({
    type: 'LOGIN',
    payload,
  });
};
