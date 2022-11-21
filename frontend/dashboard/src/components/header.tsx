import routesGuest from '../constants/routes-guest.constants'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const title = `Painel de Controle - ${routesGuest.find((route) => route.path === router.pathname)?.name}`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Painel de controle" />
      </Head>
      <header className="flex items-center justify-between px-4 py-2 bg-slate-800 shadow-xl">
        <nav className="flex items-center justify-between space-x-4">
          <div className="items-center justify-between space-x-4 flex md:hidden">
            <div className="flex items-center justify-center w-10 h-10 bg-slate-900 rounded-full">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
          </div>
          <ul className="flex items-center justify-between space-x-4">
            {routesGuest.map((route, index) => (
              <li key={index} className="text-white">
                <a href={route.path} className="hover:text-slate-300">
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
