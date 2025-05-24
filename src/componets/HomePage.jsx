import React, { useState, useEffect } from "react";
import bgimage from "../assets/home.jpeg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import indhresh from "../assets/indhresh.jpeg";
import home1 from "../assets/home1.jpg"
import indresh from "../assets/indresh.jpeg"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import geetha from '../assets/geetha.jpeg'
import reshma from '../assets/reshma.jpeg'
import pavan from '../assets/pavan.jpeg'
import sanjay from '../assets/sanjay.jpeg'
import kowshik from '../assets/kowshik.jpeg'
import indresh2 from '../assets/indresh2.jpeg'
import ravi from '../assets/ravi.jpeg'
import rakesh from '../assets/rakesh.jpeg'
import veerendra from '../assets/veerendra.jpeg'



const HomePage = () => {



 
  const quotes = [
    "Believe in yourself.",
    "Stay positive and strong.",
    "Every day is a second chance.",
    "Push yourself forward.",
    "Success is a journey, not a destination.",
    "Never stop learning.",
    "Be kind and humble.",
    "Work hard, dream big.",
    "Stay focused and never give up.",
    "The best is yet to come.",
  ];
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 1500);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);
   const navigate=useNavigate();
  return (
    <main>
      <section style={{ backgroundImage: `url(${bgimage})` }}
          className="h-auto  bg-no-repeat  bg-cover">
        <div
          className="h-[inherit] w-[inherit] bg-[rgb(0,0,0,0.5)] "
        >
          <h1 className="text-[85px] text-white text-center py-15 font-thin ">
            Don’t just use{" "}
            <b className="underline opacity-100  font-semibold">technology</b>{" "}
            <br />
            build it.with the expert help only <br /> on our
            <b className="underline opacity-100  font-semibold"> platform!</b>
          </h1>
          <button className=" bg-orange-500 text-center mx-135 w-95 text-white rounded-[12px] text-[25px] " onClick={()=>navigate("/studentregister")}>
            Start your Journey With Us...
            <FaArrowTrendUp className="inline" />
          </button>
          <FaArrowDown className="bg-white rounded-[50%] h-8 w-8 mx-175 mb-3 my-10" />
          <br />
          <br />
        </div>
      </section>
      <section>
        <h1 className="text-red-400 text-center text-[50px] p-40 pb-50">
          {quotes[index]}
        </h1>
      </section>
      <br />
      <br />
      <br />  
      <section className="bg-gradient-to-b from-gray-300 to-[#F1F1F1]">
        <h1 className="text-[40px] text-white text-center">Meet Our Expert Trainers</h1> 
        <hr className="w-110 border-3 mx-135"></hr> <br /><br />
        <p className="text-center -mt-13 text-red-400 text-[20px]">Learn from the Best, Become Your Best.</p>
        <ul className="grid grid-cols-3 mx-50 py-10 gap-20">
          <li>
            <img src={geetha} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
            <p className="text-[16px] font-bold pl-17">M.Geetha</p>
            <p>Mern Stack Trainer/Front End Trainer</p>
          </li>
          <li>
            
          <img src={reshma} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
          <p className="text-[16px] font-bold pl-10">Shaik Reshma</p>
          <p className="pl-8">Front End Trainer</p>
          </li>
          <li>
          <img src={pavan} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
          <p className="text-[16px] font-bold pl-10">Pavan Kumar Reddy</p>
          <p className="pl-15">Java Trainer</p>
          </li>
          <li>
          <img src={sanjay} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
          <p className="text-[16px] font-bold pl-12">Sanjay Gowda</p>
          <p className="pl-12">SQL Trainer</p>
          </li>
          <li>
          <img src={kowshik} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
          <p className="text-[16px] font-bold pl-12">Kowshik Gowda</p>
          <p className="pl-13">Java Trainer</p>
          </li>
          <li>
          <img src={indresh2} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
          <p className="text-[16px] font-bold pl-13">Indhresh Yadav</p>
          <p className="pl-12">Full Stack Trainer</p>
          </li>
          <li>
            <img src={ravi} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
             <p className="text-[16px] font-bold pl-17">Ravi</p>
            <p>Advance Java Trainer</p>
          </li>
          <li>
            <img src={rakesh} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
             <p className="text-[16px] font-bold pl-13">Rakesh Kumar</p>
            <p className="pl-13"> Full Stack Trainer</p>
          </li>
          <li>
            <img src={veerendra} alt="" srcset="" className="rounded-[52%] h-50 w-50" />
             <p className="text-[16px] font-bold pl-17">G veerendra</p>
            <p className="pl-15">Python Trainer</p>
          </li>
        </ul> <br /><br /><br />
        <hr className="w-[80%] mx-35 border text-gray-300" /> <br /><br /><br /><br />
      </section>
      
      <section className=" bg-gradient-to-b from-[#F0F0F0] to-white min-h-screen">
        <ul className="flex gap-20 mx-40">
          <li>
            <p className="text-[60px] font-bold py-20">
              How it all <br /> works
            </p>
            <hr className="w-20 border-3 -mt-20"></hr>
            <p className="text-gray-600">
              Don’t limit your challenges. <br />
              Challenge is your limits.
            </p>
          </li>
          <li>
            <img
              src={indhresh}
              alt=""
              className="h-160 w-100  rounded-[5%] py-1"
            />
          </li>
          <li>
            <ul
              className=" absolute left-222
           py-8 "
            >
              <li className="h-30 w-30 rounded-[50%] bg-white text-[#FF006E] text-[70px] text-center ">
                1
              </li>{" "}
              <br />
              <br />
              <br />
              <br />
              <li className="h-30 w-30 rounded-[50%] bg-white text-[#FF006E] text-[70px] text-center ">
                2
              </li>{" "}
              <br />
              <br />
              <br />
              <br />
              <li className="h-30 w-30 rounded-[50%] bg-white text-[#FF006E] text-[70px] text-center ">
                3
              </li>
            </ul>
          </li>
          <li>
            <ul className="py-8">
              <li>
                <h3 className="text-[25px] ">Find the perfect tutor</h3> <br />
                <p>
                  Connect with our expert tutors <br /> in any subject and start
                  learning today.
                </p>
              </li>
              <br />
              <br />
              <br />
              <br />
              <li>
                <h3 className="text-[25px] ">Schedule your lesson</h3> <br />
                <p>
                  Choose your time, connect with your <br /> tutor, and start
                  learning on your <br /> terms.
                </p>
              </li>
              <br />
              <br />
              <br />
              <br />
              <li>
                <h3 className="text-[25px]">Start the journey</h3> <br />
                <p>
                  Take the first step toward <br />
                  mastering your goals with the <br /> right guidance..
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <br />
        <br />
      </section>
      <hr className="border border-gray-400 w-[80%] mx-30"></hr>
      <section  className="">
        <div  className=" h-150 bg-gradient-to-b from-white to-gray-600">
          <img src={home1} alt=""  className="w-[75%]  pt-60  mx-40 rounded-[30px]"  />
          <p className="-mt-100 mx-100 text-white text-[60px]">Start Learning With Us.....</p>
          

        </div>
        
        <div className="bg-[#2F3C41] h-auto">
          <section className="flex pt-100 justify-around">
            <div className=" h-90 w-78 ">
              <img src={indresh} alt="" className="h-70 w-70 rounded-[50%] p-10" />
              <p className="text-white text-[15px] pl-20">G Indhresh</p>
              <p className="text-white text-[15px] pl-10">Java Full Stack Developer</p>
             

            </div>
            <div >
              <ul className="">
                <li className="mb-2 p-5 text-white">
                  <CiLocationOn className="text-white text-[40px] inline " /> Anatapur/Andhra pradesh .

                </li>
                <li className="mb-2 p-5 text-white">
                  <MdOutlineAddIcCall className="text-white text-[50px] inline" /> 9959410482/7207570482
                </li>
                <li className="mb-2 p-5 text-white">
                <IoMailOpenOutline  className="text-white text-[50px] inline"/> gollaindresh201@gmail.com
                </li>
                <li></li>
              </ul>

            </div>
            <div >
              <ul className="flex pt-40 gap-30">
                <li>
                  <CiInstagram className="inline text-[50px] text-white" />
                </li>
                <li>
                  <CiLinkedin className="inline text-[50px] text-white" />
                </li>
                <li>
                  <FaGithub className='inline  text-[50px] text-white' />
                </li>
              </ul>
               

            </div> 
           
          </section>
           <hr className="w-[70%] text-white mx-50"></hr>
           <ul className="pt-20 pb-10 flex justify-around">
            <li className="text-[#B6BABC]"> 
              Copyright<FaRegCopyright className="inline" />2025 software Learning platform
            </li>
            <li className="text-[#B6BABC]">
              Designed by Indhresh yadav full stack developer
            </li>
           </ul>
        </div>
          
      </section>
      
      
    </main>
  );
};

export default HomePage;
