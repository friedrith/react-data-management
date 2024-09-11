import { useContext } from 'react'
import Context from './Context'

export default function Input() {
  const { value, onChange } = useContext(Context)

  console.log('Input')

  return (
    <input type='text' value={value} onChange={e => onChange(e.target.value)} />
  )
}
