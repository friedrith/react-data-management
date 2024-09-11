import { useState } from 'react'
import Input from './Input'
import Footer from './Footer'

import Context from './Context'
import Foo from './Foo'

export default function App() {
  const [value, setValue] = useState('')

  return (
    <Context.Provider value={{ value, onChange: setValue }}>
      <div>
        <h1>redux Example</h1>
        <Input />
        <Footer />
        <Foo />
      </div>
    </Context.Provider>
  )
}
