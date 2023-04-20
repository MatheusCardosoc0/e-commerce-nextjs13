"use client"

import useCounterState from "@/context/useCounterState"
import Link from "next/link"

const CategoriesPage = () => {

  const { counter, reduceCounter } = useCounterState()

  return (
    <div>
      {counter}

      <button onClick={() => reduceCounter()}>
        Reduzir
      </button>

      <Link href={'/'}>
        Ver outro
      </Link>
    </div>
  )
}

export default CategoriesPage