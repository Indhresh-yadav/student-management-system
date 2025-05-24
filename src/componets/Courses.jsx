import axios from "axios";
import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  // const[pdf,setPdf]=useState("");
  // const handlepdf=()=>{
  //   window.open(pdf);
  // }


  useEffect(() => {
    let fetchAll = async () => {
      try {
        let response = await axios.get(
          "http://localhost:8080/indhreshyadav/fetchallcourse"
        );
        //console.log(response);
        setCourses(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAll();
  }, []);

  const fetchPdf = async (id) => {
    console.log("fetchpdf function")
    try {
      const response = await axios.get(
        `http://localhost:8080/indhreshyadav/fetchpdf/${id}`,
        { responseType: "arraybuffer" }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
     // setPdf(url);
     console.log(url);
      window.open(url); 
    } catch (error) {
      console.error("Error fetching PDF", error);
    }
  };

    const handlePayment = async (courseId) => {
  try {
    const response = await fetch("http://localhost:8080/indhreshyadav/payment?amount=1000", {
      method: "POST",
    });

    if (!response.ok) {
      // handle non-200 HTTP response
      const errorText = await response.text();
      alert("Payment Error: " + errorText);
      return;
    }

    const order = await response.json();

    const options = {
      key: "rzp_test_uzPSq4hTyECnmv", // your Razorpay key_id
      amount: order.amount,
      currency: order.currency,
      name: "Software Learning Platform",
      description: "Student Transaction",
      order_id: order.id,
      handler: function (response) {
        
        alert("Payment successful!");
        fetchPdf(courseId);
        console.log(response);
      },
      prefill: {
        name: "Indhresh Yadav",
        email: "gollaindresh201@gmail.com",
        contact: "9959410482"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment error", error);
    alert("Payment failed: " + error.message);
  }
};


  return (
    <>
      <main className="">
       <section className="flex   ">
        <div className=" bg-blue-500 h-auto  w-[25%]">
        
        <ul className="mb-10 mx-15 leading-[65px] text-white text-[20px]">
        <h1 className="text-[30px] text-orange-400 ">Our Courses</h1> 
          <li>JAVA</li>
          <li>PYTHON</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVA SCRIPT</li>
          <li>REACT JS</li>
          <li>SPRING BOOT</li>
          <li>HIBERNATE</li>
        </ul>
        </div>
         <div className="h-auto w-[75%]  border-t-15 border-r-10 border-blue-500 rounded-tr-[30px] p-4 ">
          <h2 className=" text-[25px] mx-23 text-blue-500"><u>All Courses Pdf's</u></h2>  <br />
          {courses.map((course) => (
            <ul key={course.cid} className=" w-200    p-2 box-shadow-co rounded-[20px] h-25 p-2 mb-8  bg-[#0C5A62] mx-23">
              <li className="text-[20px] pl-5 mb-2 text-white">{course.courseName}</li> 
              <li className="text-[15px] pl-4">Developed by ....|     {course.authorName}</li>
              <li className="mx-60">
                <button onClick={() => handlePayment(course.cid)} className="w-200 text-white" >Pay & Download PDF</button>
                {/* <button onClick={()=>fetchPdf(course.cid)} className="w-200 text-white">Download</button> */}
              </li>
            </ul> 
          ))} 
        </div>
       </section> 
      </main>
    </>
  );
};

export default Courses;
