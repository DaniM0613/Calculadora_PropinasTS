import { Dispatch } from "react";
import type { OrderActions } from "../reducers/order-reducer";
import type { MenuItems } from "../types";

type MenuItemProps = {
    item: MenuItems,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItems({item, dispatch} : MenuItemProps) {
  return (
    <button
       className="border-2 border-purple-900 hover:bg-purple-300 w-full p-2"
       onClick={() => dispatch({type: 'add-item', payload:{item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">$ {item.price}</p>
      
    </button>
  )
}


