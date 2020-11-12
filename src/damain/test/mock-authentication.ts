import { AuthenticationParams } from "@/damain/usecases/authentication";
import faker from 'faker'
export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password()
})