export interface IAuth {
  token: string;
  signed: boolean;
}
export interface ILogin {
  type: string;
  payload: IAuth;
}
