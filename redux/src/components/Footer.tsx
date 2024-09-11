import { useContext } from 'react'
import Context from './Context'

export default function Footer() {
  const { value } = useContext(Context)

  console.log('Footer')

  return <div>value: {value}</div>
}
