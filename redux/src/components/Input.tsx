import { useAppDispatch, useAppSelector } from '../hooks'
import { getValue, setValue } from '../store'

export default function Input() {
  const value = useAppSelector(getValue)
  const dispatch = useAppDispatch()

  console.log('Input')

  return (
    <input
      type='text'
      value={value}
      onChange={e => dispatch(setValue(e.target.value))}
    />
  )
}
