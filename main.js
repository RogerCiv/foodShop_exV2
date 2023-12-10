
import { searchFood } from './src/helper/searchFood'
import { getFoodApi } from './src/utils/getFoodsApi'
import './style.css'

const url = "http://localhost:4000/categories"

const cardsContainer = document.querySelector('.cards')
const inputSearch = document.getElementById("inputSearch")
const btnSearch = document.getElementById("btnSearch")



getFoodApi(url,cardsContainer)

searchFood(url,cardsContainer)



