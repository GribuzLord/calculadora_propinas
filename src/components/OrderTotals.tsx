import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTottalsProps={
    order:OrderItem[],
    tip:number
}

export default function OrderTotals({order,tip}:OrderTottalsProps) {

    const subtotalAmount=useMemo(() => order.reduce((total,item)=>total+(item.quantity*item.price),0) , [order])
    const tipAmount=useMemo(()=>subtotalAmount*tip,[tip,order])
    const totalAmount=useMemo(()=>subtotalAmount+tipAmount,[tip,order])

    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas:</h2>
            <p>Subtotal a pagar:
                <span className="font-bold "> {formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Propina:
                <span className="font-bold "> {formatCurrency(tipAmount)}</span>
            </p>

            <p>Total a pagar:
                <span className="font-bold "> {formatCurrency(totalAmount)}</span>
            </p>
        </div>
    
        <button></button>
    </>
  )
}
