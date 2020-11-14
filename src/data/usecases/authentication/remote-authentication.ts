import { AuthenticationParams } from '@/damain/usecases/authentication';
import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialsError } from '../../../damain/errors/invalid-credentials-error';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
   const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    });
    switch(httpResponse.statusCode) {
      case HttpStatusCode.anathorized: throw new InvalidCredentialsError()
      default: return Promise.resolve()
    }
  }
}
