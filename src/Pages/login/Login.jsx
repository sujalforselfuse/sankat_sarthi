import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegionDropdown } from "react-country-region-selector";
const Login = () => {
  const form = useRef();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading,setLoading]=useState(false);

  const history=useNavigate();

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://sankat-backend.onrender.com/api/auth/userlogin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      setLoading(false);

      localStorage.setItem("token", json.authtoken);
      history("/");
    } else {
      setLoading(false);
      alert("fail");
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="2xl:w-[1000px] xl:w-[500px] lg:w-[450px] w-full bg-white"
      >
        {/* Form Container */}

        <div className="flex flex-col w-full h-full justify-start sm:py-10 sm:px-6 px-4 py-8 gap-y-6">
          {/* Heading */}

          <h1 className="2xl:text-7xl sm:text-4xl text-2xl text-green-900 text-center font-bold tracking-wide">
            Login
            <span className="text-black"> Yourself</span>
          </h1>

          <p class="text-gray-600 text-center">Sign up to your account.</p>

          {/* Input Fields */}

          {/* Email */}

          <div className="relative z-0 w-full group h-[53px]">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="block px-0 h-full w-full 2xl:text-[1.5rem] text-lg text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          {/* Password */}

          <div className="relative z-0 w-full group h-[53px]">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="block px-0 h-full w-full text-lg 2xl:text-[1.5rem] text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />

            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute 2xl:text-[1.5rem] text-base text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}

          <div className="2xl:h-[60px] h-[42px] 2xl:text-[1.5rem] flex sm:justify-between items-center justify-center">
            <button
              type="submit"
              value="Send"
              className="relative inline-flex items-center justify-center border-2 border-black px-6 lg:px-8 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-green-300 via-green-400 to-blue-400 group-hover:opacity-100"></span>

              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>

              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>

              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

              <span className="relative">Login &rarr;</span>
            </button>

            <a
              href="/signup"
              className="2xl:text-xl sm:text-lg text-lg text-green-900 text-center font-medium tracking-wide underline"
            >
              Signup
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
