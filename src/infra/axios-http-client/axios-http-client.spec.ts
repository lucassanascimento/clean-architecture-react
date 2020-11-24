import { AxiosHttpClient } from './axios-http-client';
import { mockAxios } from '@/infra/test';
import axios from 'axios';
import { mockPostResquest } from '@/data/test/mock-http-post';

jest.mock('axios');


type SutType = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};
mockPostResquest()
const makeSut = (): SutType => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};


describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostResquest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test('Should return the correct statusCode and body',  () => {
    const { sut, mockedAxios } = makeSut();
    const promise =  sut.post(mockPostResquest());
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
