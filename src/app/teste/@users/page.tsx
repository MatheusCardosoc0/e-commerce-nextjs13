
type FunctionProps = {
  id: number
  name: string
}

const asyncFunction = async (): Promise<FunctionProps[]> => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: "huherwoie"},
        {id: 2, name: "hentai"}
      ])
    }, 4000)
  })

  return myPromise as Promise<FunctionProps[]>
}

const Users = async () => {

  const products = await asyncFunction()

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {product.id}
          {product.name}
        </div>
      ))}
    </div>
  )
}

export default Users