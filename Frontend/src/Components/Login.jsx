import React,{useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
const handleSubmit=(e)=>{
e.preventDefault()
set
}
  return (
    <>
    <div className='w-full h-screen items-center justify-center flex bg-blue-700 px-4'>
        <div className='bg-blue-300 border m-11 rounded-4xl absolute p-15 align-center justify-center flex flex-col'>
            <h1 className='text-3xl m-2 font-bold text-white'>Login</h1>
            <input type="text"  placeholder='Enter your Email' className='rounded border border-zinc-500 bg-blue-100 px-3 py-2.5 m-1.5 outline-none  '/>
            <input type="password" name="password" id="password"  placeholder='******' className='rounded border border-zinc-500 bg-blue-100 p-2 m-1.5 outline-none  '/>
            <button className='rounded border border-black bg-blue-900 font-bold text-white p-2 m-1.5 outline-none  ' onClick={handleSubmit}>Login</button>
            <p className='text-1xl '>Don't have account ? <a href="/">Signup</a></p>
        </div>
    </div>
    </>
  )
}

export default Login