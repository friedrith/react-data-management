import { create } from 'zustand'

interface ValueState {
  value: string
  setValue: (v: string) => void
}

const useValue = create<ValueState>()(set => ({
  value: '',
  setValue: value => set(state => ({ value })),
}))

export default useValue
