import {RiLoginBoxLine} from 'react-icons/ri'
import React from 'react'

const Login = () => {
  return (
    <section className="w-full h-full bg-gradient-to-t from-white to-blue-300">
        <form className="h-[70vh] relative top-[5em] flex flex-col gap-[1em] justify-center items-center" action="">
            <input className="p-2 w-[20em] rounded-[10px]" type="email" name="email" placeholder="Your email" required/>    
            <input className="p-2 w-[20em] rounded-[10px]" type="password" name="password" placeholder="password" required/>
            <button className="p-2 w-[15em] flex justify-center gap-[5px] rounded-[10px] border bg-[rgba(255,245,173,0.2)] cursor-pointer">
                

                Login 
                
                <RiLoginBoxLine className="relative top-1"/>
            </button> 
        </form>

    </section>
  )
}

export default Login