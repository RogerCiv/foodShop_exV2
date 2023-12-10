import { saveOrderApi } from "../utils/saveOrderApi"

export function saveLocalStorage(orderData){
    let arrayLS = []

    if(localStorage.getItem("OrderFoods")){
        arrayLS = JSON.parse(localStorage.getItem("OrderFoods"))
        if(!Array.isArray(arrayLS)){
            arrayLS = []
        }
        
    }
    arrayLS.push(orderData)
    localStorage.setItem("OrderFoods",JSON.stringify(arrayLS))
    saveOrderApi(orderData).then(() => {
        location.reload()
    })
}