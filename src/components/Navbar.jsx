"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title:"About",
      path:'/About'
    },
    {
      title:"Services",
      path: '/Services'
    },
    {
      title:"Contact",
      path:'/Contact'
    },
    {
      title:"Blogs",
      path:'/Blogs'
    },
    {
      title:"Categories",
      path:'/Categories'
    },
    {
      title:"Profile",
      path:'/Profile'
    },
    {
      title:"Meals",
      path:'/Meals'
    },
    {
      title:"Gallery",
      path:"/Gallary"
    }
    
  ]
  
  const handler =()=>{
    router.push('/Login')
  }

  if(pathName.includes('Profile'))
    return <div className="bg-blue-700 p-10">
      Profile Navbar
    </div>
  return (
   <nav className="bg-gray-400 text-white px-5 py-8 flex justify-between items-center">
    <h3 className="text-white font-bold text-3xl">Next Hero</h3>
    <ul className="space-x-5">
   {
    links?.map(item=><Link className={`${pathName===item.path && 'text-amber-500'}`} href={item.path} key={item.path}>{item.title}</Link>)
   }
    </ul>
    <button onClick={handler} className="btn bg-black text-white p-3">Login</button>
   </nav>
  );
};

export default Navbar;