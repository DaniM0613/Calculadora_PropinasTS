import { useCallback } from 'react'
import { OrderItem} from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalProps) {

  const subtotalAmount = useCallback(() => order.reduce(( total, item) => total + (item.quantity * item.price), 0 ), [order])
  const tipAmout = useCallback(() => subtotalAmount() * tip, [tip, order])
  const totalAmout = useCallback(() => subtotalAmount() + tipAmout(), [tip, order])
 
  return (
    <>
     <div className="space-y-3">
       <h2 className="font-black text2xl">Totales y Propina:</h2>
       <p>Subtotal a pagar: {''}
         <span className="font-bold">{ formatCurrency(subtotalAmount())}</span>
       </p>

       <p>Propina: {''}
         <span className="font-bold">{formatCurrency(tipAmout())}</span>
       </p>

       <p>Total a pagar: {''}
         <span className="font-bold">${formatCurrency(totalAmout())}</span>
       </p>
     </div>

     <button 
        className='w-full bg-black uppercase p-3 text-white font-bold mt-10 disabled:opacity-10'
        disabled={totalAmout() === 0}
        onClick={placeOrder}
     >
        Guardar Orden
     </button>
      
    </>
  )
}


