/* eslint-disable react/no-unescaped-entities */
"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const FormField = ({ isSignUp, handleChange, handleSubmit, googleSignIn, githubSignIn }: any) => {
  return (
    <div>
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-secondary bg-alt">
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blackleading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="text"
            placeholder="John@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="******"
          />
        </div>
        {isSignUp && (
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Sign up as a
            </label>
            <select name="accountType" onChange={handleChange} className="w-full py-2 px-3 text-black border rounded shadow">
              <option value="User">User</option>
              <option value="Host">Host</option>
            </select>
          </div>
        )}
        <div className="flex items-center w-full">
          <button
            onClick={handleSubmit}
            className="w-full border border-black hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105"
            type="button"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
        <>
          <div className="flex flex-col gap-4 mt-3">
            <button 
              onClick={googleSignIn} 
              className="flex justify-center items-center w-full border border-black hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105" 
              type="button"
            >
              <FcGoogle className="m-2"/> Continue with Google
            </button>
            <button 
              onClick={githubSignIn} 
              className="flex justify-center items-center w-full border border-black hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-200 hover:scale-105" 
              type="button"
            >
              <AiFillGithub className="m-2"/> Continue with Github
            </button>
          </div>
        </>
        <div className="text-neutral-500 text-center mt-4 font-light"></div>
        <div>
          <div className="p-4 inline-block align-baseline font-bold text-sm text-black hover:text-black cursor-pointer">
            {isSignUp ? (
              <div>
                <Link href={"/auth/login"}>Already have an account? Sign in</Link>
              </div>
            ) : (
              <div>
                <Link href={"/auth/register"}>Don't have an account? Sign up</Link>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormField;
