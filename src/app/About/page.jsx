import { getPost } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';


export const metadata = {
  title: "About",
  description: "build up next level website",
};


const About = async() => {
  
  const posts = await getPost();
  console.log(posts);

  
  return (
    <div>
     
      What about you???
      <div className='grid grid-cols-3 gap-5 m-10'>
        {
          posts?.slice(0,10)?.map(({id,title,body}) => <div key={id} className='max-w-sm bg-gray-400 border border-red-600 p-5'>
         <h3 className='font-bold text-2xl my-5'>{title}</h3>
         <p>{body}</p>
         <Link href={`/About/${id}`}><button className='bg-black p-5 text-white mt-8'>See Details</button></Link>
          </div> )
        }
      </div>
    </div>
  );
};

export default About;