export interface IAuth {
  username: string;
  token: string;
  signed: boolean;
}
export interface ILogin {
  type: string;
  payload: IAuth;
}
