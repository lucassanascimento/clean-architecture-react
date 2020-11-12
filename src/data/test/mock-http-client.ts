import { HttpPostClient, httpPostParams } from "../protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient {
    url?: string;

    async post(params: httpPostParams): Promise<void> {
      this.url = params.url;
      return Promise.resolve();
    }
  }