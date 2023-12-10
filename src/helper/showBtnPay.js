import { handlepay } from "./handlePay"

export function showBtnPay(){
    const btnPay = document.querySelector('.pay-button')
    const orderItems = document.querySelectorAll(".order .card")
    if(orderItems.length > 0){
        btnPay.classList.remove("d-none")
        btnPay.classList.add("d-block")
    }else{
        btnPay.classList.remove('d-block')
        btnPay.classList.add("d-none")
    }

    btnPay.addEventListener("click", handlepay)
}



