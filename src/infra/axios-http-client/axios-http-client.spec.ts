import { AxiosHttpClient } from './axios-http-client';
import { httpPostParams } from '@/data/protocols/http/http-post-client';
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.random.objectElement(),
  status: faker.random.number()
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostResquest = (): httpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostResquest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  });

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostResquest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status, 
      body: mockedAxiosResult.data
    })
  });
});
