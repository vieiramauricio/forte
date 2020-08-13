import { ILogin, IAuth } from '../../contracts/Auth/Action/login.interface';

const authReducer = (state: IAuth, action: ILogin) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.payload.token,
        signed: action.payload.signed,
      };
    default:
      return state;
  }
};

export default authReducer;
