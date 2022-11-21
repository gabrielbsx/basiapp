// function decorator without class
export default function errorDecorator(wrappedFunction: Function) {
  return function (...args: any[]) {
    try {
      return wrappedFunction(...args)
    } catch (error) {
      console.log(error)
    }
  }
}
