import { makeVar, useReactiveVar } from '@apollo/client'

const valueVar = makeVar('')

export default function useValue() {
  const value = useReactiveVar(valueVar)

  return {
    value,
    setValue: (value: string) => valueVar(value),
  }
}
