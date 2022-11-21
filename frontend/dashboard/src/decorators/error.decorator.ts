// function decorator without class
export default function errorDecorator(wrappedFunction: Function) {
  return async function (...args: any[]) {
    try {
      return await wrappedFunction(...args)
    } catch (error: Error | any) {
      console.log(error.message)
    }
  }
}
