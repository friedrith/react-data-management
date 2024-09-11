import { createContext } from 'react'

const Context = createContext({ value: '', onChange: (v: string) => {} })

export default Context
