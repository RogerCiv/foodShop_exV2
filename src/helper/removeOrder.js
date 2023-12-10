import { showBtnPay } from "./showBtnPay"

export function removeOrder(orderCard,foodContainer,orderContainer){
    const btnDelete = orderCard.querySelectorAll(".card-link")

    btnDelete.forEach(del => {
        del.addEventListener("click", (e) => {
            //console.log(e.target.dataset.id);

            orderContainer.removeChild(orderCard)
            foodContainer.style.opacity = 1
            const addButton = foodContainer.querySelector('.card-link')
            addButton.style.display = "block"
            showBtnPay()
        })
    })
}