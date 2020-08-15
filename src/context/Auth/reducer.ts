import { ILogin, IAuth } from '../../interfaces/Auth/Action/login.interface';

const authReducer = (state: IAuth, action: ILogin) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        signed: action.payload.signed,
      };
    default:
      return state;
  }
};

export default authReducer;
