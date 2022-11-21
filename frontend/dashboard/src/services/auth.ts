import { SignInRequestDataType } from '../types'
import { UserType } from '../types/user.type'
import { api } from './api'

export async function signInRequest(data: SignInRequestDataType): Promise<{ user: UserType, token: string }> {
  const response = await api.post('/auth', data)
  return response.data
}