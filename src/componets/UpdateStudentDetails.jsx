import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgimage from "../assets/r1.jpg";
// import { toast } from 'react-toastify';

const UpdateStudentDetails = () => {
  const navigate = useNavigate();

  let result = JSON.parse(localStorage.getItem("studentDetails"));
  console.log(result.data);
  let { sid, firstName, lastName, email, age, gender, mobile, password,img } =
    result.data;
  let [formdata, setFormdata] = useState({
    sid,
    firstName,
    lastName,
    email,
    age,
    gender,
    mobile,
    password,
    img,
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  let handleUpdate = async (e) => {
    e.preventDefault();
    try {
      alert("Are you sure want to update");
      let studentDetails = await axios.put(
        `http://localhost:8080/indhreshyadav/updatestudent`,
        formdata
      );
      if (studentDetails.status === 200) {
        toast.success("your data updated sucessfully");
        localStorage.setItem(
          "studentDetails",
          JSON.stringify(studentDetails.data)
        );
        navigate("/")
      } else {
        toast.error("somthing went wrong");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <main style={{backgroundImage:`url(${bgimage})`}} className="h-[646px] bg-no-repeat w-full bg-center bg-cover">
        <section className=" w-300 mx-auto  pl-20"> <br />
           <img 
           src={`data:image/jpeg;base64,${img}`} 
          //src='/'
          id='image1'
          name='img'
          value={formdata.img}
          onChange={handleChange}
          alt="Student" 
          className='w-40 h-40 rounded-[50%]'
        />
          <form className="grid grid-cols-4 py-10 gap-5">
           
            <label className="text-[20px] text-red-500">Student Id :</label>
            <input
              type="text"
              name="text"
              value={formdata.sid}
              onChange={handleChange}
              className=" w-70 h-9 pl-3 placeholder-blue-300 bg-transparent border-2 rounded-[10px] border-grey-100  outline-none"
            />

            <label className="text-[20px] text-red-500 ">
              Student FirstName :
            </label>
            <input
              type="firstname"
              name="firstName"
              value={formdata.firstName}
              onChange={handleChange}
              className="w-70 h-9 pl-3 placeholder-blue-300 bg-transparent border-2 rounded-[10px] border-grey-100  outline-none"
            />

            <label className="text-[20px] text-red-500">
              Student LastName :
            </label>
            <input
              type="lastname"
              name="lastName"
              value={formdata.lastName}
              onChange={handleChange}
              className=" w-70 h-9 pl-3 placeholder-blue-300 bg-transparent border-2 rounded-[10px] border-grey-100  outline-none "
            />
            <label className="text-[20px] text-red-500">Student Email :</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className=" w-70 h-9 pl-3 placeholder-blue-300 bg-transparent border-2 rounded-[10px] border-grey-100  outline-none"
            />
            <label className="text-[20px] text-red-500">Student Age :</label>
            <input
              type="age"
              name="age"
              value={formdata.age}
              onChange={handleChange}
              className="w-70 h-9 pl-3 placeholder-blue-300 bg-transparent border-2 rounded-[10px] border-grey-100 outline-none"
            />
            <label className="text-[20px] text-red-500">Student Gender :</label>
            <input
              type="gender"
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
              className=" w-70 h-9 pl-3 placeholder-blue-300 bg-transparent border-2 rounded-[10px] border-grey-100 outline-none "
            />
            <label className="text-[20px] text-red-500">
              Student Mobile Number :
            </label>
            <input
              type="mobile"
              name="mobile"
              value={formdata.mobile}
              onChange={handleChange}
              className=" w-70 h-9 pl-3 placeholder-blue-300 bg-transparent border-2 rounded-[10px] border-grey-100  outline-none"
            />
          </form>
          <div className="flex gap-60 p-5">
            <button
              type="submit"
              className="bg-blue-200 p-1 rounded-[8px] h-8 w-30 outline-none"
              onClick={() => navigate("/studentdetails")}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-200 p-1 rounded-[8px] h-8 w-30 outline-none"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </section>
        
      </main>
    </>
  );
};

export default UpdateStudentDetails;
