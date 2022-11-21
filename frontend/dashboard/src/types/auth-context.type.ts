import { SignInRequestDataType } from './sign-in-request-data.type'
import { UserType } from './user.type'

export type AuthContextType = {
  isAuthenticated: boolean
  user: UserType | null,
  signIn: (data: SignInRequestDataType) => Promise<void>
}