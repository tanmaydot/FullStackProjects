"use client"

import FormField from "@/components/FormField/FormField";
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { push } = useRouter()
    const isSignUp = true

    const [ userInfo, setUserInfo ] = useState({
      name: '',
      email: '',
      password: '',
      accountType: ''
    })

    const handleSubmit = async (e: any) => {
      e.preventDefault()
      const { name, email, password, accountType } = userInfo
      if(name == '' || email == undefined || password == null) return alert('Enter all info')
     
      try {
        const response = await fetch('/api/signup', {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            accountType: accountType
          }),
        })
        const data = await response.json()
        
        if(data.success) { toast.success("registered successfully") }
        if(data.error) toast.warn(data.error)
      } catch (error) {
        toast.warn('Internal server error')
      }
    }

    const handleChange = (e: any) => {
      const { name, value } = e.target
      setUserInfo((prevInfo) => ({...prevInfo, [name]: value,}))
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
    <FormField isSignUp={isSignUp} handleChange={handleChange} handleSubmit={handleSubmit} googleSignIn = {googleSignIn} githubSignIn = {githubSignIn}/>
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