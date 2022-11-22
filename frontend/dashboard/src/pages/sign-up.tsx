import { Formik } from 'formik'
import Link from 'next/link'
import ButtonGuest from '../components/button-guest'
import FormGuestAnimation from '../components/form-guest-animation'
import InputGuest from '../components/input-guest'
import Layout from '../components/layout'
import Logo from '../components/logo'
import LogoFormAnimation from '../components/logo-form-animation'
import errorDecorator from '../decorators/error.decorator'
import { SignUpRequestDataType } from '../types/sigin-up-request-data.type'

export default function SignUp() {
  const handleSignUp = errorDecorator(
    async (data: SignUpRequestDataType): Promise<void> => {
      throw new Error('Não foi possível efetuar o cadastro')
    }
  )

  return (
    <Layout header={false}>
      <div className="min-h-screen flex flex-col md:flex-row md:p-0 p-10 gap-10 justify-evenly items-center">
        <LogoFormAnimation>
          <Logo />
        </LogoFormAnimation>
        <FormGuestAnimation>
          <div className="bg-neutral-900 shadow-xl gap-4 border border-slate-800 md:w-[600px] w-full md:mx-0 mx-4 rounded-xl p-10">
            <div className="flex flex-col mb-12">
              <h1 className="text-xl font-bold text-slate-100">Cadastro</h1>
              <span className="text-md text-slate-200">
                Bem vindo, faça seu cadastro para continuar
              </span>
            </div>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                passwordConfirmation: '',
              }}
              onSubmit={handleSignUp}
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
                    name="name"
                    label="Nome"
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={errors.name}
                    touched={touched.name}
                  />
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
                  <InputGuest
                    name="passwordConfirmation"
                    label="Confirmação de senha"
                    type="password"
                    placeholder="Confirme sua senha"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                    error={errors.passwordConfirmation}
                    touched={touched.passwordConfirmation}
                  />
                  <ButtonGuest
                    type="submit"
                    isSubmitting={isSubmitting}
                    text="Cadastrar"
                  />
                </form>
              )}
            </Formik>
            <div className="flex flex-row justify-end mt-12">
              <Link href="/sign-in" className="flex text-white font-bold hover:text-slate-200 gap-1">
                Já tem uma conta? <span className="text-blue-400">Entrar</span>
              </Link>
            </div>
          </div>
        </FormGuestAnimation>
      </div>
    </Layout>
  )
}
