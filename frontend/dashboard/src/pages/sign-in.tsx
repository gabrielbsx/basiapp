import Layout from '../components/layout'

export default function SignIn() {
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
          <form className="">
            <div className="flex items-center gap-4 my-3">
              <label
                className="flex font-medium sm:text-sm text-gray-100"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="flex w-full px-3 py-2 mt-1 bg-slate-200 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex justify-end mt-3">
              <a>
                <span className="text-red-400 text-sm font-bold">Esqueceu sua senha?</span>
              </a>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <label
                className="flex font-medium sm:text-sm text-gray-100"
                htmlFor="email"
              >
                Senha
              </label>
              <input
                className="flex w-full px-3 py-2 mt-1 bg-slate-200 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-slate-700 text-white rounded-md font-bold px-4 py-2 shadow-md hover:bg-slate-600"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="flex flex-row justify-end mt-12">
            <a href="#" className="flex text-white font-bold hover:text-slate-200 gap-1">
              Não tem uma conta? <span className="text-blue-400">Cadastre-se</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
