import { AuthenticationParams } from './../usecases/authentication';
import faker from 'faker';

export const mockAthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
