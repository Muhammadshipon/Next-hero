import React from 'react';
import { Headland_One } from 'next/font/google';
import { redirect } from 'next/navigation';

const getTime = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`,{next:{revalidate:5}});
  const data = await res.json();
  // if(data){
  //   redirect('/Meals')
  // }
  return data.currentTime
}

const headland =  Headland_One({weight:['400'], subsets: ["latin"] });

const Services = () => {
  const time = getTime();
  return (
    <div className={`${headland.className}`}>
       <h3>Time:{time}</h3>
      this is services page
    </div>
  );
};

export default Services;