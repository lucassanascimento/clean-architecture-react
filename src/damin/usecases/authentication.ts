import { AccountModel } from "../models/account-model";
type AuthenticationParams = {
  email: string;
  passwork: string;
};

export interface Authetication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}
