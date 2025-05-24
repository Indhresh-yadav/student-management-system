import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const AllStudentDetails = () => {
  const [students, setStudents] = useState([]);
  const hasFetched = useRef(false);
  useEffect(() => {
    let fetchdata = async () => {
      // e.preventDefault();
      if (hasFetched.current) return;
      try {
        let result = await axios.get(
          "http://localhost:8080/indhreshyadav/findallstudents"
        );
        if(result === null){
        toast.error("student data is not present")

        }
        console.log(result.data);
        if (result.status === 200) {
          toast.success("all student details fetched sucessfully");
          setStudents(result.data.data);
        } else {
          toast.error("fetching failed");
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
    hasFetched.current = true;
  }, []);


  const [file, setFile] = useState(null);
  const [courseName, setCourseName] = useState("");
  const[authorName,setAuthorName]=useState("");
  
  let handleSubmit = async (e) => {
    e.preventDefault();
   
    let formData = new FormData();
    formData.append("file", file);
    formData.append("courseName", courseName);
    formData.append("authorName",authorName);

    try {
      let result = await axios.post(
        "http://localhost:8080/indhreshyadav/savecourse",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCourseName(null);
      setAuthorName(null);
      if (result.status === 200) {
        alert("upload sucess");
        toast.success("file upload sucess fully");
        console.log(result);
      }
    } catch (e) {
      toast.error("file upload failed");
      console.log(e);
    }
  };
  return (
    <>
      <main>
        <main className="p-15 bg-[#8337EE]  rounded-b-[40%] h-100">
          <section className=" m-auto flex box-shadow-x  bg-white w-[90%] h-auto gap-15  overflow-hidden">
            <div className="">
              <h2 className="text-xl font-bold p-2">Student Details</h2>
              <table className="min-w-[30%] ">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">Student image</th>
                    <th className="border p-2">Student ID</th>
                    <th className="border p-2">First Name</th>
                    <th className="border p-2">Last Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Age</th>
                    <th className="border p-2">Gender</th>
                    <th className="border p-2">Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.sid} className="hover:bg-gray-50">
                      <td className="h-40 w-40 border p-2">
                        <img
                          src={`data:image/jpg;base64,${student.img}`}
                          alt="student"
                          className="h-30 w-30 rounded-full"
                        ></img>
                      </td>
                      <td className="border p-2 text-[15px]">{student.sid}</td>
                      <td className="border p-2 text-[15px]">
                        {student.firstName}
                      </td>
                      <td className="border p-2 text-[15px]">
                        {student.lastName}
                      </td>
                      <td className="border p-2 text-[15px]">
                        {student.email}
                      </td>
                      <td className="border p-2 text-[15px]">{student.age}</td>
                      <td className="border p-2 text-[15px]">
                        {student.gender}
                      </td>
                      <td className="border p-2 text-[15px]">
                        {student.mobile}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          
            <div className="">
              <h1 className="text-[20px] p-3 font-bold">Add Course Pdf's</h1> 
              <form onSubmit={handleSubmit} className="m-auto p-5">
                <div className="mb-4">
                
                  <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    className="w-60 p-2 border  h-8 outline-none p-2 rounded-[10px]  placeholder-orange-300 border-blue-700"
                    placeholder="Enter your course name"
                    required
                  /> <br /> <br />
                   <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-60 p-2 border  h-8 outline-none p-2 rounded-[10px]  placeholder-orange-300 border-blue-700"
                    placeholder="Enter Author Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className=" text-blue-700  text-orange-300 " htmlFor="pdffile">Choose PDF File</label>
                  <input
                    type="file"
                    id="pdffile"
                    accept="application/pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full  border hidden"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white w-30 h-7 rounded "
                >
                  Upload
                </button>
              </form>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default AllStudentDetails;
