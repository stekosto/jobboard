import { Login } from './login';

export interface Signup extends Login {
  userType?: string,
  created_at?: string
}
