import useValue from '../useValue'

export default function Input() {
  const { value, setValue } = useValue()

  console.log('Input')

  return (
    <input type='text' value={value} onChange={e => setValue(e.target.value)} />
  )
}
