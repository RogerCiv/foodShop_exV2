import { findFoodsApi } from "../utils/findFoodsApi"
import { getFoodApi } from "../utils/getFoodsApi"
import { capitalizeWords } from "./capitalizeWords"

export function searchFood(url,container){
    btnSearch.addEventListener("click", () => {
        const capitalizeValue = capitalizeWords(inputSearch.value)
        findFoodsApi(url,capitalizeValue,container)
        inputSearch.value = ""
    })
    
    inputSearch.addEventListener("keydown", (e) => {
        const capitalizeValue = capitalizeWords(inputSearch.value)
        if(e.key === "Escape" || (inputSearch.value === "" && e.key === "Enter")){
            container.innerHTML = ""
            getFoodApi(url,container)
        }else if(e.key === "Enter"){
            findFoodsApi(url,capitalizeValue,container)
            inputSearch.value = ""
        }
    })
}