export async function ListProducts () {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const response = await fetch('http://localhost:3000/products', {next: {tags: ['get-products']}})
  const data = await response.json()

  return (
      <ul>
        {data.map((product: TProduct) => {
          return <li key={product.id}>{product.name}-{product.price}</li>}
        )}
      </ul>
  )
}