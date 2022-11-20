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
      <header>
        <nav>
          <ul>
            {routesGuest.map((route, index) => (
              <li key={index}>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
