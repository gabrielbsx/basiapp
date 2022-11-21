import { useContext } from 'react'
import Layout from '../components/layout'
import { AuthContext } from '../contexts/auth-context'
import { SignInRequestDataType } from '../types'
import { Formik } from 'formik'
import Link from 'next/link'
import InputGuest from '../components/input-guest'
import ButtonGuest from '../components/button-guest'

export default function SignIn() {
  const { signIn } = useContext(AuthContext)
  async function handleSignIn(data: SignInRequestDataType, { setSubmitting, setErrors, ...formikOptions }: any,): Promise<void> {
    try {
      setSubmitting(true)
      await signIn(data)
    } catch (error) {
      
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <Layout header={false}>
      <div className="min-h-screen flex flex-col md:flex-row md:p-0 p-10 gap-10 justify-evenly items-center">
        <div className="gap-4">
          <svg className="md:w-full w-24 text-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2.5L1.5 17.5h17L10 2.5zm0 1.5l6.5 11h-13L10 4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="bg-neutral-900 shadow-xl gap-4 border border-slate-800 md:w-[600px] w-full md:mx-0 mx-4 rounded-xl p-10">
          <div className="flex flex-col mb-12">
            <h1 className="text-xl font-bold text-slate-100">Login</h1>
            <span className="text-md text-slate-200">
              Bem vindo de volta, faça login para continuar
            </span>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={handleSignIn}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <InputGuest
                  name="email"
                  label="E-mail"
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
                <InputGuest
                  name="password"
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                />
                <div className="flex justify-end mb-5">
                  <a className="text-red-400 text-sm font-bold hover:text-red-300 cursor-pointer" href="#">
                    <span>Esqueceu sua senha?</span>
                  </a>
                </div>
                <ButtonGuest
                  type="submit"
                  isSubmitting={isSubmitting}
                  text="Entrar"
                />
              </form>
            )}
          </Formik>
          <div className="flex flex-row justify-end mt-12">
            <Link href="/sign-up" className="flex text-white font-bold hover:text-slate-200 gap-1">
              Não tem uma conta? <span className="text-blue-400">Cadastre-se</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
