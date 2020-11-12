export type httpPostParams = {
  url: string
  body?: object
}
export interface HttpPostClient {
    post(params: httpPostParams): Promise<void>
  }
  