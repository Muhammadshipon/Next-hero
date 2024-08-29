import Meals from '@/components/Meals';
import React from 'react';

const MealsPage = () => {
  
  return (
    <div>
      <div className='p-10'>
        <h1 className='text-3xl font-semibold my-10 '>Search Your Meals</h1>
       <Meals></Meals>
      </div>
    </div>
  );
};

export default MealsPage;