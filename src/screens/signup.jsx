import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const toHomePage = async () => {
    const signupMap = {
      password: password,
      Role: role,
      Phone: phone,
      Email: email,
      Last_Name: lastName,
      First_Name: firstName,
    };
    console.log(signupMap);

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(signupMap),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      <div className="w-3/5 p-5">
        <div className=" text-left font-bold">
          <span className=" text-green-500">Company</span>Name
        </div>
        <div className=" py-10">
          <h2 className="text-3xl font-bold mb-2 text-green-500">
            Sign in to Account
          </h2>
          <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
          <div className="flex justify-center my-2">
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaFacebookF className=" text-sm " />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaLinkedinIn className=" text-sm " />
            </a>
            <a
              href="#"
              className=" border-2 rounded-full p-3 mx-1 border-green-200"
            >
              <FaGoogle className=" text-sm " />
            </a>
          </div>
          <p className=" text-gray-400 py-3">or use your email account</p>
          <div className=" flex flex-col items-center">
            <form>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  className=" bg-gray-100 flex-1 outline-none text-sm"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  className=" bg-gray-100 flex-1 outline-none text-sm"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className=" bg-gray-100 flex-1 outline-none text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className=" bg-gray-100 w-64 p-2 flex items-center mb-3"
              >
                <option value=""> Select Role</option>
                <option value="doctor"> Doctor</option>
                <option value="patient"> Patient</option>
              </select>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className=" text-gray-400 m-2 " />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className=" bg-gray-100 flex-1 outline-none text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="  text-gray-400 m-2 " />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" bg-gray-100 flex-1 outline-none text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <div className="flex w-64 mb-5 justify-between">
              <label className="flex items-center text-xs">
                <input type="checkbox" name="remember" className=" mr-1" />
                Remind me
              </label>
              <a href="#" className=" text-xs">
                Forget Password
              </a>
            </div>
            <button
              onClick={toHomePage}
              className=" border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className=" w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        <h2 className=" text-3xl font-bold mb-2">Hello, Friend!</h2>
        <div className="border-2 w-10 border-white inline-block mb-2"></div>
        <p className="mb-10">Already have an account?.</p>
        <Link
          to="/"
          className=" border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;