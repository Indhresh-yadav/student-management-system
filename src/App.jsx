import HomePage from './componets/HomePage'

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import StudentLogin from './componets/StudentLogin';
import AdminLogin from './componets/AdminLogin';
import StudentRegister from './componets/StudentRegister';
import AdminRegister from './componets/AdminRegister';
import StudentDetails from './componets/StudentDetails';
import UpdateStudentDetails from './componets/UpdateStudentDetails';
import { ToastContainer, toast } from 'react-toastify';
import AllStudentDetails from './componets/AllStudentDetails';

import Courses from './componets/Courses';
function App() {


  return (
    <>
   <BrowserRouter>
   <Navbar/>
    <ToastContainer/>
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/updatestudentdetails' element={<UpdateStudentDetails/>}/>
    <Route path='/studentlogin' element={<StudentLogin/>}></Route>
    <Route path='/adminlogin' element={<AdminLogin/>}></Route>
    <Route path='/studentregister' element={<StudentRegister/>}></Route>
    <Route path='/adminregister' element={<AdminRegister/>}></Route>
    <Route path='/studentdetails' element={<StudentDetails/>}></Route>
    <Route path='/adminregister' element={<AdminRegister/>}></Route>
    <Route path='/allstudentdetails' element={<AllStudentDetails/>}></Route>
    <Route path='/addcourse' element={<Courses/>}></Route>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
