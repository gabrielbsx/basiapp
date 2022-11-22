import { toast } from 'react-toastify'

export default function errorDecorator(wrappedFunction: Function) {
  return async function (...args: any[]) {
    try {
      return await wrappedFunction(...args)
    } catch (error: Error | any) {
      if (error.message) {
        toast.error(error.message, {
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  }
}
