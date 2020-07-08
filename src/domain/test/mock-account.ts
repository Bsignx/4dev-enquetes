import { AccountModel } from './../models';
import { AuthenticationParams } from '@/domain/usecases';
import faker from 'faker';

export const mockAthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
});
