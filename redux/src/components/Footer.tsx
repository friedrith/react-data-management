import { useAppSelector } from '../hooks'
import { getValue } from '../store'

export default function Footer() {
  const value = useAppSelector(getValue)

  console.log('Footer')

  return <div>value: {value}</div>
}
