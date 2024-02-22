import { Suspense } from "react";
import { InputButton } from "./input-button";
import { ListProducts } from "./list-products";

export default function Home() {
  return (
    <>
      <h1>List Products</h1>
     <Suspense fallback={'carregando...'}> 
      <ListProducts />
     </Suspense>

      <InputButton />
    </>
  )   
}
