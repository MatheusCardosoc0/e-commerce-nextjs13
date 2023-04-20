"use client"

import useCounterState from "@/context/useCounterState"
import Link from "next/link"

export default function Home() {

  const {addCounter, counter} = useCounterState()

  return (
    <div>
      {counter}

      <button onClick={() => addCounter()}>
        Aumentar
      </button>

      <Link href={'/categories'}>
        Ver outro
      </Link>
    </div>
  )
}
