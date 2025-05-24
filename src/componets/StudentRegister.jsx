import React, { useState } from "react";
import axios from "axios";
import image from "../assets/gindresh.png";
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from "react-toastify";


const StudentRegister = () => {
   const [photo, setPhoto] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [visible, setVisible] = useState(false);
  const [studentdetails, setStudentDetaiils] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    age: "",
    gender: "",
  });
  const [otpSent, setOtpSent] = useState(false);

  let { firstName, lastName, email, password, mobile, age, gender } = studentdetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetaiils({ ...studentdetails, [name]: value });
  };

  let handleImageChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

 


 

  const handleRegister = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post(
        "http://localhost:8080/indhreshyadav/savestudent",
        studentdetails
      );
      const result = response.data;
      const studentId = result.data.sid;

      // Upload image
      const formData = new FormData();
      formData.append("file", imageFile);

      await axios.put(`http://localhost:8080/indhreshyadav/uploadimage/${studentId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStudentDetaiils({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
        age: "",
        gender: "",
      });
      setPhoto(null);
      

      if (result.statusCode === 201) {
        alert("Welcome to software learning platform");
        toast.success("Your data inserted successfully");
      } else {
        alert("Something went wrong on the backend");
      }
    } catch (error) {
      alert(error + " error while fetching");
    }
  };

  return (
    <>
      <main className="h-auto bg-gradient-to-b from-gray-400 to-white">
        <h1 className="text-center text-[40px] text-gray-700 ">
          Welcome Software Learning Platform
        </h1>
        <div className="flex py-10 ">
          <div>
            <img src={image} alt="" className="h-140 -mt-30" />
          </div>
          <form onSubmit={handleRegister} className="w-75 text-center">
            <label className="text-[20px] text-white bg-[#5753C4] w-100 h-30 p-3 rounded-[10px]">
              Student Registration Form
            </label>
            <br /> <br />
            <input
              required
              type="text"
              name="firstName"
              placeholder="Enter Your FirstName"
              value={firstName}
              onChange={handleChange}
              className="rounded-md border-b-2 w-60 outline-none border-blue-400 placeholder-gray-500"
            />
            <br />
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Lastname"
              value={lastName}
              onChange={handleChange}
              className="rounded-md border-b-2 w-60 outline-none border-blue-400 placeholder-gray-500"
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleChange}
              className="rounded-md border-b-2 w-60 outline-none border-blue-400 placeholder-gray-500"
            />
            <br />
            <br />
            <input
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={handleChange}
              className="rounded-md border-b-2 w-56 outline-none border-blue-400 placeholder-gray-410"
            />
            <button type="button" onClick={() => setVisible(!visible)}>
              {visible ? <BiShow /> : <BiHide />}
            </button>
            <br />
            <br />
            <input
              type="mobile"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={mobile}
              onChange={handleChange}
              className="rounded-md border-b-2 w-60 outline-none border-blue-400 placeholder-gray-400"
            />
            <br /> <br />
           
            
            <input
              type="number"
              name="age"
              placeholder="Enter Your age"
              value={age}
              onChange={handleChange}
              className="rounded-md border-b-2 w-60 outline-none border-blue-400 placeholder-gray-400"
            />
            <br />
            <br />
            <input
              type="text"
              name="gender"
              placeholder="Enter Your gender"
              value={gender}
              onChange={handleChange}
              className="rounded-md border-b-2 w-60 outline-none border-blue-400 placeholder-[#bdc3c7]"
            />
            <br />
            <br />
            <label htmlFor="fileInput" className="border-blue-400 border-b-2 rounded-md">
              Upload Photo
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
              className="hidden"
              required
            />
            <div className="pl-8">{photo && <img src={photo} alt="Selected" className="w-48 h-48 rounded-2xl p-2" />}</div>
            <br />
            <br />
            <button
              type="submit"
              className="border w-20 bg-blue-500 text-white rounded-[15px] placeholder-[#bdc3c7] p-2"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default StudentRegister;