import { renderCardFoods } from "../components/renderCardFoods"

export async function getFoodApi(url,container){

    try{
        const resp = await fetch(url)
        if(!resp.ok) throw new Error("Error get food ")
        const data = await resp.json()

        data.map(food => {
            //console.log(food);
            renderCardFoods(container,food)
        })
        
    }catch(err){
        console.log("Error: ",err.message);
    }
}