
import { revalidateTag } from "next/cache"
import { ButtonForm } from "./form-button"

export function InputButton(){
  async function handlerButton(e: FormData){
    'use server'
    const data = {
      name: e.get('name'),
      price: e.get('price'),
    }
    await new Promise(resolve => setTimeout(resolve, 3000))
    fetch('http://localhost:3000/products', {method: 'POST',  body:JSON.stringify(data)})
    revalidateTag('get-products')
  }
  return (

      <form action={handlerButton}>
        <input name="name" type="text" placeholder='Name of product' />
        <input name="price" type="number" placeholder='price of product' />
        
       <ButtonForm/>
      </form>
  )
}