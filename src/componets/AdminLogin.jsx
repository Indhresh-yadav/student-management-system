import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const AdminLogin = () => {
  let navigate=useNavigate();
  let[visible,setVisible]=useState(false);
        const[login,setLogin]=useState({
            username:'',
            password:''
    })
    let{username,password}=login;
    const handleChange=(e)=>{
        let{name,value}=e.target
        setLogin(
            {...login,[name]:value}
        )
    }
    const handleLogin= async (e)=>{
        e.preventDefault();
      try{
        const adminDetails=await axios.get(`http://localhost:8080/indhreshyadav/adminlogin?username=${username}&&password=${password}`)
        if(adminDetails.status === 200){
          toast.success("admin login sucessfully")
          localStorage.setItem("admindetails",JSON.stringify(adminDetails.data))
          navigate("/allstudentdetails")
          // navigate("/addcourse");

        }else{
          toast.error("Email are Password Inavalid")
        }
      } catch (error){
        toast.error("login failed")
        console.log(error);
      }
    
    }
  return (
    <>
    <main className='bg-[#001E22] h-170'>
      <section className='flex  py-20 '>
        <div className=' w-170  border-r-4 border-white h-[500px] pt-20'>
        <p className='text-center mx-auto text-[25px] text-white py-20'>Designed By Indhresh Yadav</p>
        </div>
          <form  className='mx-50 py-25'>
            <label className='text-white text-[30px] mx-3'>WELCOME BACK</label> <br />
            <hr className='border-2'></hr>
            <label className='text-white  mx-5'> Secure Your Admin Login</label> <br /> <br />
            <label></label>
            <input type="username" name='username'   placeholder='Enter Your username' value={username} onChange={handleChange}   className='rounded-md  w-60 h-10 placeholder-white border-2 border-orange-400  pl-2 text-white outline-none'  /><br/><br/>
            <input type={visible?"text":"password"} name='password'  placeholder='Enter Your Password' value={password}  onChange={handleChange}  className='rounded-md  w-60 h-10 placeholder-white border-2 border-orange-400  pl-2 outline-none text-white'  />
             <button  onClick={()=>setVisible(!visible)} > {visible? <BiShow /> : <BiHide />}</button> <br /><br />
        <div className='flex gap-10'>
          <button onClick={handleLogin} className='bg-[#E3621F] p-1 w-25  text-white'>Login</button>
           <button  onClick={()=>navigate("/adminregister")} className='bg-[#E3621F] p-1 w-25 text-white' >Register</button>
        </div>

        
      </form>
      </section>
    </main>
    </>
  )
}

export default AdminLogin;