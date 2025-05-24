import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../assets/login.png";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";




const StudentLogin = () => {
  let[visible,setVisible]=useState(false);
  const navigate=useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  let { email, password } = login;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let studentDetails = await axios.get(
        `http://localhost:8080/indhreshyadav/studentlogin?email=${email}&password=${password}`
      );
      if (studentDetails.status === 200) {
        toast.success("login sucessfully completed")
        navigate("/studentdetails")
        localStorage.setItem("studentDetails",JSON.stringify(studentDetails.data));

      } else {
        alert("somthing went roung try agin");
      }
    } catch (error) {
      alert("email or password incorrect")
      console.log("login failed ",error);
      
    }
  };
  return (
    <>
    <main>
     
      <section className="flex mx-120 py-35">
        <div className=" p-5 bg-[#09103A] h-80 w-200 rounded-tl-2xl  rounded-bl-2xl py-20">
           <h1 className="text-white text-[25px]">Student Login </h1>
           <p className="text-white text-[10px]">Start your Journey <br></br>With Us</p>
        </div>
      <div className=" p-12   w-300">
        <form >
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleChange}
            className="outline-none border-3 h-9 w-60 rounded-sm border-gray-200 pl-2"
          />
          <br />
          <br />

          <input
            type={visible? "text":"password"}
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={handleChange}
            className="outline-none border-3 h-9 w-60 rounded-sm border-gray-200 pl-2"
          />
          <button onClick={()=>setVisible(!visible)}> {visible? <BiShow /> : <BiHide />}</button>
          
          <br />
          <br />

          <button type="submit" className="w-28 h-10 text-white bg-sky-700 rounded-2xl" onClick={handleLogin}>Login</button> {'\u00A0'} {'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}
          <button type="submit" className="w-28 h-10 text-white bg-sky-700 rounded-2xl" onClick={()=>navigate("/studentregister")}>Register</button>
        </form>
      </div>
      </section>
      <img src={img} alt="" srcset="" className="absolute top-72 left-100 z-[-3] opacity-30" />
      </main>
    </>
  );
};

export default StudentLogin;
