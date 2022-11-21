import IProps from '../interfaces/props.interface'
import Header from './header'

export default function Layout({ children }: IProps) {
  return (
    <div className="min-h-screen min-w-screen bg-slate-900">
      <Header />
      <div className="">
        {children}
      </div>
    </div>
  )
}
