import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    const [order,setOrder]=useState<OrderItem[]>([])

    const addItem=(item:MenuItem)=>{
        const itemExist=order.find(orderItem=>orderItem.id===item.id)

        if(itemExist){ //Se verifica la duplicidad del item para la orden y se aumenta solo la cantidad
            const updatedOrder=order.map(orderItem=>
                orderItem.id===item.id ? {...orderItem,quantity:orderItem.quantity+1}
                : orderItem
            )
            setOrder(updatedOrder)
        }else{//Se agrega el item por primera vez
            const newItem={...item,quantity:1}
            setOrder([...order,newItem])
        }    
    }

    const removeItem=(id:MenuItem['id'])=>{
        setOrder(order.filter(item=>item.id!==id))
    }


    return{
        order,
        addItem,
        removeItem
    }
}