import React from 'react';

const getPost = async(id)=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  console.log(data);
   return data
 }

 export const generateMetadata=async({params})=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await res.json();
  return {
    title:`${data.title}`,
    description:data.body,
    keywords: data.body.split(' ')
  }
 }
const postDetailsPage = async({params}) => {
  const {id,body,title} = await getPost(params.id);
  console.log(params.id);
  return (
    <div>
      <h1>{id}</h1>
    <h3>{title}</h3>
    <p>{body}</p>
    </div>
  );
};

export default postDetailsPage;