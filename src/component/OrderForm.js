import React, { useState } from "react"; 
import useCartContext from "../context/CartContext";
import {saveToFirestore} from '../data'

export default function OrderForm() {
  const {cart, clear, totalPriceItems, amountItemInCart} = useCartContext();
  const [isOrderDone, setIsOrderDone] = useState(false);

  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    email:""
  });

  function onInputChange(event){
    const target = event.target;
    const value = target.value;
    const nameInp = target.name;

    setBuyer({
        ...buyer,
        [nameInp]: value
    })        
  }

  function onSubmit() {
    modelDatas();
    setIsOrderDone(true);
    setBuyer({
      nombre: "",
      apellido: "",
      email:""
    })
    clear();
  }

  function modelDatas() {
    let getItems = [];
    getItems = cart.map(item => ({
      id:`${item.id}`,
      title:`${item.nombre}`,
      price:`${item.precio}`
    } ))
    const orderDatas = {
      buyer: buyer,
      items:getItems,
      total: totalPriceItems()
    }
    
    saveToFirestore(orderDatas);
  }

  function validateForm(){
    let formIsComplete = Object.keys(buyer) 
    .find( (field) => buyer[field] === "")   
    return formIsComplete
  }

  if(isOrderDone) {
    return <p>Gracias por comprar!</p>
  } else {
      return (
        <div>
          {
            <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
              <div className="my-5">
                <h2> Información de Compra</h2>
                <p> <strong>Cantidad de items:</strong> {amountItemInCart()}  <strong>Precio Total:</strong> {totalPriceItems()}$</p>
              </div>
              <div className="border-solid border-2 border-indigo-200 w-96" style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
                <h3 className="my-4">Información del buyer</h3>
                {
                  Object.keys(buyer).map( key =>{
                    return (
                      <div  key ={key} style={{ display: "flex", marginBottom: 15 }}>
                        <input className="w-72" required placeholder={key? `Digite su ${key}`:""}  style={{borderWidth: "2px", borderStyle: "none", border:"solid 2px gray", borderRadius:"5px"}} name={key} value={buyer[key]} type="text" onChange={evt => onInputChange(evt)} />
                      </div>
                    )
                  })
                }
                <button  className="bg-sky-700 text-white my-4 rounded" disabled={validateForm()} onClick={evt => onSubmit(evt)}> Crear orden </button>   
              </div>
            </div>
          }          
        </div>
      );
  }
}
