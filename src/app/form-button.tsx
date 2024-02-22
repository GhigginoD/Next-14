'use client'
import { useFormStatus } from "react-dom"

export function ButtonForm(){

  const {pending} = useFormStatus()

  return (
     <button type="submit" disabled={pending}>{ pending ? 'loading...' : 'Click'}</button>
  )
}