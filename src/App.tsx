import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import useOrder from "./hooks/useOrder"
import { menuItems } from "./data/db"



function App() {
   
   const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-purple-700 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      
      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10"> 
          {menuItems.map(item => (
             <MenuItems
                 key={item.id}
                 item={item}
                 addItem={addItem}
             />
          ))}
          </div> 
        </div>
        
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
           <OrderContents
             order={order}
             removeItem={removeItem}
           />

           <OrderTotals/>
        </div>
      </main>
     
  
        
    </>
  )
}

export default App
