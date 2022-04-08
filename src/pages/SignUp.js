import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosClient from "../api/axiosClient";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlerSubmitForm = async () => {
    if (email && password && confirmPassword && password === confirmPassword) {
      try {
        const res = await axiosClient.post("/api/users/register", {
          username,
          email,
          password,
        });
        localStorage.setItem("access-token", `Beare ${res.token}`);
        localStorage.setItem("id", res._id);
        localStorage.setItem("username", res.username);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-row overflow-y-auto">
          <div className="h-auto w-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://windmill-dashboard.vercel.app/assets/img/create-account-office-dark.jpeg"
              alt="create-account-office"
            />
          </div>
          <div className="flex items-center justify-center p-12 w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700">
                Create account
              </h1>
              <label className="block text-sm">
                <span className="text-gray-700">Username</span>
                <input
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-green-400"
                  type="text"
                  placeholder="Jane Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700">Email</span>
                <input
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-green-400"
                  type="text"
                  placeholder="janedoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700">Password</span>
                <input
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="****************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700">Confirm password</span>
                <input
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="****************"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </label>
              <div className="flex mt-6 text-sm">
                <label className="flex items-center">
                  <input
                    className="text-green-400 accent-emerald-400 focus:border-green-400 focus:outline-none"
                    type="checkbox"
                  ></input>
                  <span className="ml-2">
                    I agree to the&nbsp;
                    <span className="underline">privacy policy</span>
                  </span>
                </label>
              </div>
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-400 hover:bg-green-400 focus:outline-none"
                onClick={handlerSubmitForm}
              >
                Create account
              </button>
              <hr className="my-8"></hr>
              <p className="text-sm font-medium text-green-600 hover:underline">
                <Link to="/login">Already have an account? Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
