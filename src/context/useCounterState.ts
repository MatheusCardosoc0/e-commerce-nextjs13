import { create } from "zustand"

interface CounterState {
  counter: number
  addCounter: () => void
  reduceCounter: () => void
}

const useCounterState = create<CounterState>(set => ({
  counter: 0,
  addCounter: () => set((state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  reduceCounter: () => set(state => {

    if(state.counter == 0){
      return state
    }

    return {
      ...state,
      counter: state.counter - 1
    }
  })
}))

export default useCounterState