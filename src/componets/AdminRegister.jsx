import React, { useState } from 'react'
import axios from 'axios';
import img from '../assets/admin.jpg'
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const navigate=useNavigate();
    const [visible, setVisible] = useState(false);
    const[register,setRegister]=useState({
      name:'',
      mobile:'',
      email:'',
      username:'',
      password:''


})
let{name,mobile,email,username,password}=register;
const handleChange=(e)=>{
    let{name,value}=e.target
    setRegister(
        {...register,[name]:value}
    )
}
const handleRegister= async (e)=>{
  e.preventDefault();
  try{
    const response= await axios.post('http://localhost:8080/indhreshyadav/saveadmin',register);
    let result=response.data;
    setRegister({
      name:'',
      mobile:'',
      email:'',
      username:'',
      password:''
    });
    if(result.statusCode === 200){
      toast.success("Admin Data insereted sucessfully")
      navigate("/")
      
    }else{
      alert("somthing went wrong your backend side ")
    }
  } catch (error){
    alert(error+"error while fetching");
  }
    
    
    

}

  return (
    <>
    <main>
      <section   style={{ backgroundImage: `url(${img})` }} className=' h-screen"'>
        <div className='absolute top-40 left-100 opacity-30 z-0 pointer-events-none select-none'>
          <h1 className='text-[140px] text-white '>WELCOME</h1>
          <hr className='w-160 border-3 text-sky-400'></hr>
          <p className='text-[55px] text-white'>WE'RE GLAD  YOU'RE HERE</p>
        </div>
         <form  onSubmit={handleRegister} className=' py-30 mx-100 p-50 '>
          <label className='text-[25px] text-gray-800'>Admin Register</label> <br /><br /><br />
       
        <input  required type="name" name='name' placeholder='Enter Your Name'  value={name} onChange={handleChange} className='rounded-md border-2 w-60 h-9 border-gray-500 pl-2  outline-none bg-transparent'  /> <br/><br/>
        
        <input type="mobile" name='mobile'   placeholder='Enter Your mobile number' value={mobile} onChange={handleChange}  className='rounded-md border-2 w-60 h-9 border-gray-500 pl-2  outline-none bg-transparent' /><br/><br/>
   
        <input type="email" name='email'   placeholder='Enter Your Email' value={email} onChange={handleChange}   className='rounded-md border-2 w-60 h-9 border-gray-500 pl-2  outline-none bg-transparent' /><br/><br/>
        
        <input type="username" name='username'  placeholder='Enter Your username' value={username}  onChange={handleChange}  className='rounded-md border-2 w-60 h-9 border-gray-500 pl-2  outline-none bg-transparent' /><br/><br/>
        
        <input type={visible ? "text" : "password"}  name='password'  placeholder='Enter Your password' value={password} onChange={handleChange}  className='rounded-md border-2 w-60 h-9 border-gray-500 pl-2  outline-none bg-transparent'/>
           <button type="button" onClick={() => setVisible(!visible)}>
                      {visible ? <BiShow /> : <BiHide />}
            </button> <br /><br />
       <div className='flex gap-10'>
        <button type='submit' className='bg-sky-500 p-1 w-30 rounded-xl'>Register</button>
        <button type='submit' className='bg-sky-500 p-1  w-30 rounded-xl' onClick={()=>navigate('/adminlogin')}>Login</button>
       </div>
        
      </form>
      </section>
    </main>
    </>
  )
}

export default AdminRegister;