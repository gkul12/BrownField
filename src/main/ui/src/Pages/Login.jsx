import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import airplanes from "../images/LoginIMG.JPG";
// import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCheck, setAdminCheck] = useState(false);

  const navigate = useNavigate();

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const obj = {
    email: email,
    password: password,
    isAdmin: adminCheck,
  };
  const onLoginClick = () => {
    axios
      .post("http://localhost:8080/signin", obj)
      .then(function (response) {
        console.log("Login Successfull");
        console.log(response.data);
        localStorage.setItem("loggedInUser", response.data);
        alert("Login Successfull");
        navigate("/sidebar");
      })
      .catch(function (error) {
        alert("Invalid Creadentials");
      });
  };

  const onAdminCheckChange = (e) => {
    setAdminCheck(e.target.checked);
  };

  return (
    <>
      <div className="container">
        <div className="w-screen h-screen bg-slate-900 grid lg:grid-cols-2">
          <div>
            <img src={airplanes} alt="Logo" />;
          </div>
          <div className=" p-20">
            <div className="bg-gray-900 font-serif text-gray-50 ">
              <h1 className=" text-center text-5xl  mb-16 font-medium">
                Login
              </h1>
              <label class="block  text-md font-medium mb-2 mt-2" for="email">
                E-Mail
              </label>
              <input
                class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Example@gmail.com"
                onChange={onEmailChange}
                value={email}
              />
              <label
                class="block  text-md font-medium mb-2 mt-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Example123"
                onChange={onPasswordChange}
                value={password}
              />
              <label
                class="block pt-4 text-md font-medium mb-2 mt-2"
                for="admin"
              >
                Login as Admin?
                <TextField
                  type="checkbox"
                  id="admin"
                  onChange={onAdminCheckChange}
                  value={adminCheck}
                />
                <Link
                  className="text-gray-50 float-right "
                  role="button"
                  to="/signup"
                >
                  New customer? Sign up
                </Link>
              </label>
              <br></br>
              <br></br>
              <button
                className="float-right text-2xl text-gray-50 hover:border-2 px-1.5 py-1.5 border-gray-50 "
                id="login"
                onClick={onLoginClick}
              >
                Let's Fly
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
