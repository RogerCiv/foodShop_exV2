import { renderCardFoods } from "../components/renderCardFoods";
import { getFoodApi } from "./getFoodsApi";

export async function findFoodsApi(url,query,container){
    try{
        const resp = await fetch(`${url}?strCategory=${query}`)
        if(!resp.ok) throw new Error("Error find food")
        const data = await resp.json()

        console.log(data);

        if(data.length === 0){
            container.innerHTML = `
            <div class="card">
            <img src="https://1409791524.rsc.cdn77.org/data/images/full/353690/anime-404.jpg" class="card-img-top" alt="img 404 not found" />
            <div class="card-body">
              <h5 class="card-title">Plato ${query} no encontrado</h5>
              <p class="card-text">Vuelva a intentarlo</p>
              <p class="card-text">Precio: 0$</p>
            </div>
          </div>
                  `;
                  setTimeout(() => {
                    container.innerHTML = ""
                    getFoodApi(url,container)
                  }, 4000);
        }else{
            container.innerHTML = "" 
            data.map(food => {
                renderCardFoods(container,food)
            })
        }

    }catch(err){
        console.log("Error: ", err.message);
    }
}