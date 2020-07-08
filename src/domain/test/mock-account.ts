import { AccountModel } from './../models/account-model';
import { AuthenticationParams } from '@/domain/usecases/authentication';
import faker from 'faker';

export const mockAthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
});
