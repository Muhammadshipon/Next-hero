import React from 'react';

const CategoriesDetails = ({params}) => {
  console.log(params)
  if(params.features.length==2)
    return <div className='h-screen'>{params.features[1]}</div>
  return (
    <div >
   {params.features[0]}
    </div>
  );
};

export default CategoriesDetails;