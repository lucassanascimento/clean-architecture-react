import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios'
import faker from 'faker'
import { httpPostParams } from '@/data/protocols/http/http-post-client';
import { url } from 'inspector';

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostResquest = (): httpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const request = mockPostResquest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockAxios.post).toHaveBeenCalledWith(request.url)
  });
});
