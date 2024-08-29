import { NextResponse } from "next/server"

export const middleware = (request)=>{
  const cookie = request.cookies.get('token');
  // const cookie = false;
  const cookieValue = 'next-hero'
  // console.log(cookie)
  if(!cookie || cookie.value !== cookieValue){
    return NextResponse.redirect(new URL('/Login', request.url))
  }
 
  return NextResponse.next();
  
}

export const config ={
   matcher: ['/About','/Profile']
}