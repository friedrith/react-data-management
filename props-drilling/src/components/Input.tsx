interface Props {
  value: string
  onChange: (value: string) => void
}

export default function Input({ value, onChange }: Props) {
  console.log('Input')

  return (
    <input type='text' value={value} onChange={e => onChange(e.target.value)} />
  )
}
