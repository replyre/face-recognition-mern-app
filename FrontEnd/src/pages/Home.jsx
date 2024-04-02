import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-100 from-50% white-100 via-10% to-purple-200 to-90%  md:pt-20 ">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <div className="flex items-center w-[80%] m-auto ">
            <div>
              <h1 className="block text-7xl text-left tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-poppins">
                Welcome To
              </h1>
              <h1 className="block text-7xl text-left font-extrabold text-gray-900 sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% to-purple-700 to-90%  p-2">
                Face Recognition Login App
              </h1>
            </div>
            <img src="./images/home.jpg" className="h-[60%] w-[60%]" />
          </div>
          <p className="mt-8 text-md text-gray-600 max-w-3xl mx-4 md:mx-16 lg:mx-auto">
            An Authentication application which uses Facial Recognition to Login
            Users, build using MERN Stack and face-api.js. The primary goal of
            the application is to provide a dependable and effective
            authentication system by analyzing and confirming the user's facial
            characteristics using AI models.
          </p>
          <Link
            to={"/user-select"}
            className="flex gap-2 mt-12 w-fit mx-auto cursor-pointer z-10 p-6 py-3 rounded bg-gradient-to-r from-indigo-400 to-purple-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
            <span className="text-white">Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
