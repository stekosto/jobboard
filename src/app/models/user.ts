import { Signup } from './signup';
import { Login } from './login';

export interface User extends Login, Signup {
  userId?: string,
  fistName?: string,
  lastName?: string,
  email?: string
}
