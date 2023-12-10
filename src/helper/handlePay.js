
import { saveLocalStorage } from "./saveLocalStorage";

export function handlepay(){
    const orderItems = Array.from(document.querySelectorAll('.order .card'))

    const foods =  orderItems.map(order => {
        console.log(order.dataset.price);
        return {
            id: order.dataset.id,
            food: order.dataset.food,
            price: parseFloat(order.dataset.price),
        }
    })
    const total = foods.reduce((total,item) => total + item.price,0)
    console.log(total);
    const orderData = { foods, total}
    console.log(orderData);
  
    saveLocalStorage(orderData)



   
    
}