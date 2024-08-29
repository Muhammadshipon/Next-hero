"use client"
import error from "@/app/error";
import Image from "next/image";
import { useEffect, useState } from "react";


const Meals = () => {
  const [search,setSearch] = useState('c');
  const [meals,setMeals] = useState([]);

  const leadData=async()=>{
   try{
    const res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
    const data= await res.json();
    setMeals(data.meals);
   }
   catch{
    console.log(error.message);
   }
  }

  useEffect(()=>{
    leadData();
  },[search])


  const handler =(e)=>{
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
       <div >
          <input onChange={handler} className="border-transparent outline-none  bg-gray-100 p-1" type="text" placeholder='search your meals...' />
          <button className='bg-gray-700 text-white px-5 py-1'>Search</button>
        </div>
        <div className="grid grid-cols-4 gap-6 m-10">
{
 meals?.length>0 && meals?.map(meal => <div key={meal.idMeal} className="p-5 border-gray-600 max-w-[400px]">
   
 
   <Image src={meal.strMealThumb} alt="food" width={400} height={460}></Image>
  <h1 className="text-xl font-bold">{meal.strMeal}</h1>
  </div>)
}

        </div>
    </div>
  );
};

export default Meals;