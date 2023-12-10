import { removeOrder } from "../helper/removeOrder";
import { showBtnPay } from "../helper/showBtnPay";

export async function renderCardOrder(foodItem, foodContainer) {
  try {
    const resp = await fetch(`http://localhost:4000/categories?id=${foodItem}`);
    if (!resp.ok) throw new Error("Error Order ");
    const data = await resp.json();

    data.map((food) => {
      const orderContainer = document.querySelector(".order");
      const orderCard = document.createElement("div");
      orderCard.classList.add("col-md-12", "mt-2");
      orderCard.innerHTML = `
            <div class="card" data-id="${food.id}" data-food="${food.strCategory}" data-price="${food.price}">
            <img
              src="${food.strCategoryThumb}"
              class="card-img-top"
              alt="${food.strCategory}"
            />
            <div class="card-body">
              <h5 class="card-title">${food.strCategory}</h5>
              <p class="card-text">Precio: ${food.price}$</p>
              <a href="#" class="btn btn-link card-link" data-id="${food.id}">Quitar</a>
            </div>
          </div>
            `;
      orderContainer.appendChild(orderCard);
      removeOrder(orderCard, foodContainer, orderContainer);
      showBtnPay();
    });
  } catch (err) {
    console.log("Error: ", err.message);
  }
}
