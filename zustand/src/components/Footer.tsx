import useValue from '../useValue'

export default function Footer() {
  const { value } = useValue()

  console.log('Footer')

  return <div>value: {value}</div>
}
