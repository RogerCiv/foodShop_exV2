import { renderCardOrder } from "./renderCardOrder";

export function renderCardFoods(container, foodData) {
  let description =
    foodData.strCategoryDescription.split(" ").slice(0, 10).join(" ") + "...";
  //console.log(description);

  const foodContainer = document.createElement("div");
  foodContainer.classList.add("col-md-4");

  foodContainer.innerHTML = `
    <div class="card">
    <img
      src="${foodData.strCategoryThumb}"
      class="card-img-top"
      alt="${foodData.strCategory}"
    />
    <div class="card-body">
      <h5 class="card-title">${foodData.strCategory}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">Precio: ${foodData.price}$</p>
      <a href="#" class="btn btn-link card-link" data-id="${foodData.id}">Añadir</a>
    </div>
  </div>
    `;
  container.appendChild(foodContainer);

  const addButton = foodContainer.querySelectorAll(".card-link");

  addButton.forEach((add) => {
    add.addEventListener("click", (e) => {
      console.log(e.target.dataset.id);
      const foodId = e.target.dataset.id;
      foodContainer.style.opacity = 0.3;
      e.target.style.display = "none";
      renderCardOrder(foodId, foodContainer);
    });
  });
}
