import { useState } from 'react'
import Input from './Input'
import Footer from './Footer'
import Foo from './Foo'

export default function App() {
  const [value, setValue] = useState('')

  return (
    <div>
      <h1>Props Drilling Example</h1>
      <Input value={value} onChange={setValue} />
      <Footer value={value} />
      <Foo />
    </div>
  )
}
