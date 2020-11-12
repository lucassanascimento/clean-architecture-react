import { HttpPostClient, httpPostParams } from "@/data/protocols/http/http-post-client";

export class HttpPostClientSpy implements HttpPostClient {
    url?: string;
    body?: object;

    async post(params: httpPostParams): Promise<void> {
      this.url = params.url;
      this.body = params.body
      return Promise.resolve();
    }
  }