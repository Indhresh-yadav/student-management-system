import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const naviagte = useNavigate();
  return (
    <main>
      <div className="bg-[#E3621F] ">
        <div className="flex gap-130 w-auto">
          <ul className="">
            <li className="text-white p-3">Logo</li>
          </ul>
          <ul className="flex  place-content-around gap-40">
            <li className="text-white p-3">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-white p-3">
              <NavLink  to="/addcourse">Courses</NavLink>
            </li>
            <li className="relative group text-white p-3">
              <NavLink to="#">Register</NavLink>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded shadow-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/studentregister" className="text-[#8abdea]">
                    
                      StudentRegister
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <NavLink to="/adminregister" className="text-[#8abdea]">
                      AdminRegister
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="text-white p-3 relative group">
              <NavLink>Login</NavLink>
              <div className=" absolute left-0 mt-2 hidden group-hover:block bg-white rounded shadow-lg z-10 ">
                <ul className="py-2 ">
                  <li className="text-[#8abdea]  p-2 ">
                    <NavLink to="/studentlogin">StudentLogin</NavLink>
                  </li>
                  <li className="text-[#8abdea] p-2 ">
                    <NavLink to="/adminlogin">AdminLogin</NavLink>
                  </li>
                </ul>
              </div>
            </li>
           
          </ul>
        </div>
      </div>
      {/* <div className="flex gap-27 mx-223 hidden "></div> */}
    </main>
  );
};

export default Navbar;
