import { AccountModel } from "../models/account-model";

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authetication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}