"use client"

import FormField from "@/components/FormField/FormField";
import { useState } from "react"
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { push } = useRouter()

    const isSignUp = false
    const [ userInfo, setUserInfo ] = useState({
      email: '',
      password: ''
    })

    const handleSubmit = async (e: any) => {
      e.preventDefault()
      signIn('credentials', { ...userInfo, redirect: false})
      .then((data) => {
        if(data?.error != null) toast.warn('Wrong email or password')
        else push("/")
    })
    }

    const handleChange = (e: any) => {
      const { name, value } = e.target
      setUserInfo((prevInfo) => ({...prevInfo, [name]: value}))
    }

    const googleSignIn = (e: any) => {
      e.preventDefault()
      signIn('google', { callbackUrl: 'http://localhost:3000'})
    }
    
    const githubSignIn = (e: any) => {
      e.preventDefault()
      signIn('github', { callbackUrl: 'http://localhost:3000'})
    }

    return (
  <>
    <div className="flex container items-center justify-center h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <FormField isSignUp={isSignUp} handleChange={handleChange} handleSubmit = {handleSubmit} googleSignIn = {googleSignIn} githubSignIn = {githubSignIn}/>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </div>
  </>
    )
}

export default SignUp