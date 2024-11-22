import { Inputbox } from '../component/Input'
import axios from 'axios'
import { Heading } from '../component/Heading'
import { Subheading } from '../component/Subheading'
import { SubmitButton } from '../component/Submit'
import { useState } from 'react'
import { Linker } from '../component/Linker'
import { set } from 'zod'
export function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
        <div className='w-screen h-screen flex justify-center align-center'>
        <div className="shadow-xl h-11/12 grid grid-cols-1 w-1/2  justify-center align-center p-2" >
           <Heading title = {"Login"}></Heading>
           <Subheading p = {"Login with your credentials"} />
           <Inputbox  onChange={(e)=>{
            setEmail(e.target.value);
           }}label = {"Email"} placeholder = {"example22@gmail.com"}></Inputbox>
           <Inputbox onChange={(e)=>{
            setPassword(e.target.value);
           }} label = {"Password"} placeholder = {"Minimum 6 characters"}></Inputbox>
           <SubmitButton onClick={async()=>{
            const res = await axios.post('http://localhost:3000/v1/user/signin',{email:email,password:password});
            console.log(res.data);
            localStorage.setItem('token', res.data.token);  //LOCAL STORAGE
           }} a = {"Login"}></SubmitButton>
           <Linker tgt={"/signup"}body={"Don't have an account? Register"}/>
        </div></div>
      )
}