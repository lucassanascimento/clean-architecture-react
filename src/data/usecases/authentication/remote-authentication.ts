import { AuthenticationParams, Authetication } from '@/damain/usecases/authentication';
import { HttpPostClient , HttpStatusCode} from '@/data/protocols/http';
import { InvalidCredentialsError, UnexpectedError } from '@/damain/errors';
import { AccountModel } from '@/damain/models';

export class RemoteAuthentication implements Authetication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
   const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    });
    switch(httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.anathorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
