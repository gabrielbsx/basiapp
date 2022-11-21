import IProps from '../interfaces/props.interface'
import Header from './header'

export default function Layout({ children, header = true }: IProps & { header: boolean }) {
  return (
    <div className="min-h-screen min-w-screen from-slate-900 to-neutral-900 bg-gradient-to-br">
      {header && <Header />}
      <div className="">
        {children}
      </div>
    </div>
  )
}
