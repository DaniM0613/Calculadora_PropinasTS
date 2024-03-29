import type { MenuItems } from "../types";

type MenuItemProps = {
    item: MenuItems,
    addItem: (item: MenuItems) => void
}

export default function MenuItems({item, addItem} : MenuItemProps) {
  return (
    <button
       className="border-2 border-purple-900 hover:bg-purple-300 w-full p-2"
       onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">$ {item.price}</p>
      
    </button>
  )
}


