import { httpPostParams } from '@/data/protocols/http';
import faker from 'faker';

export const mockPostResquest = (): httpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});
