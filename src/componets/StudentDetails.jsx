import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const StudentDetails = () => {
  const navigate=useNavigate();
  
  //console.log(result);
  let result1=JSON.parse(localStorage.getItem("studentDetails"));
  console.log(result1.data);
  
  let{sid,firstName,lastName,email,age,gender,mobile,img}=result1.data;
  let handleDelete= async (e)=>{
    e.preventDefault();
    try{
        alert("Are u sure want to delete")
      const result=await  axios.delete(`http://localhost:8080/indhreshyadav/deletestudent/${sid}`)
      if(result.status === 200){
        localStorage.removeItem("studentDetails");
        toast.success("Your data deleted sucessfully deleted");
        navigate("/")
        
      }else{
        
        alert("something went wrong");
      }

    }catch (error){
      toast.error("invalid are password");
      console.log("somthing wet wrong",error);
    }
  }
  // fetch image
    const[imageurl,setImageUrl]=useState(null);
    console.log(sid)
    const fetchImage =()=>{
      let x=fetch(`http://localhost:8080/indhreshyadav/fetchimage/${sid}`);
      console.log(x);
      let image=document.getElementById("image1");
      x.then(res=>res.blob()).then(result=>{ image.src= URL.createObjectURL(result)})
      // x.then(response => response.blob()).then(result => image.src =(URL.createObjectURL(result)));
    }
    
    useEffect(()=>{
      fetchImage()
    },[])
 
 

  
  return (
   <>
   <main >   <br />
    <section className=' pt-[25px] w-[85%] mx-30 h-[620px] '>
        <div className='flex gap-20 p-10  rounded-[20px] w-[90%] mx-15 box-shadow-c bg-[#313439]'>
    
      <section className=' p-10'>
        <h1 className='text-[25px] text-orange-100 p-2'>Student Details</h1> 
        <div className='text-white p-2 opacity-70'>
        
        <img 
          // src={`data:image/jpeg;base64,${img}`} 
          src='/'
          id='image1'
          alt="Student" 
          className='w-40 h-40 rounded-[50%]'
        />
    
        <p><b>Student Id     :</b>{sid}</p>
        <p><b>Student Name    :</b>{firstName} {lastName}</p>
        <p><b>Student Email   :</b>{email}</p>
        <p><b>Student Gender  :</b>{gender}</p>
        <p><b>Student Age     :</b>{age}</p>
        <p><b>Student Mobile  :</b>{mobile}</p>
        </div>
        <br />
        <div className='flex gap-10'>
          <button onClick={()=>navigate("/updatestudentdetails")} className='bg-blue-200 w-20 h-8 rounded-[20px]'>Edit</button>
        <button onClick={handleDelete} className='bg-blue-200 w-20 h-8 rounded-[20px]'>Delete</button>
        <button onClick={()=>navigate("/")} className='bg-blue-200 w-20 h-8 rounded-[20px]'>Logout</button>
        </div>
      </section>
  
    <div className=''>
       
    </div>
   </div>
    </section>
   </main>
   </>
  )
}

export default StudentDetails;
