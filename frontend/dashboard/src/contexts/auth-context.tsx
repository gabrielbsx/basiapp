import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import isGuestRoute from '../helpers/is-guest-route.helper'
import IProps from '../interfaces/props.interface'
import { signInRequest } from '../services/auth'
import recoverUserInformation from '../services/recover-user-information'
import { AuthContextType, SignInRequestDataType } from '../types'
import { UserType } from '../types/user.type'

export const AuthContext = createContext({} as AuthContextType)
export function AuthProvider({ children }: IProps) {
  const router = useRouter()
  const { pathname } = router
  const [user, setUser] = useState<UserType | null>(null)
  const isAuthenticated = false
  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    if (!isGuestRoute(pathname) && !token) {
      router.push('/sign-in')
      return
    }
    recoverUserInformation()
      .then((response: any) => {
        setUser(response.user)
      })
  }, [])
  async function signIn({ email, password }: SignInRequestDataType): Promise<void> {
    const { token, user } = await signInRequest({ email, password })
    console.log(token, user)
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1,
    })
    setUser(user)
    // router.push('/sign-in')
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
