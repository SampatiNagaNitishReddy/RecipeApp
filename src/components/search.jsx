import styles from "./search.module.css"
import {useEffect, useState} from "react";
const url="https://api.spoonacular.com/recipes/complexSearch"
const api_key="682da09629b848f2a426b0f90627eba9"
export default function Search({foodData,setFoodData}){
    const[query,setQuery]=useState("pizza")
    useEffect(()=>{
        async function fetchFood(){
            const res=await fetch(`${url}?query=${query}&apiKey=${api_key}`)
            const data=await res.json()
            
            setFoodData(data.results)
        }
        fetchFood()
    },[query])
    return(
        <div className={styles.searchContainer}>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
    )
}