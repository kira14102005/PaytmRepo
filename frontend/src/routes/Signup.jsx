import { Inputbox } from '../component/Input';
import { Heading } from '../component/Heading';
import { Subheading } from '../component/Subheading';
import { SubmitButton } from '../component/Submit';
import { useState } from 'react';
import { Linker } from '../component/Linker';
import axios from 'axios';
export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="shadow-xl h-11/12 grid grid-cols-1 w-1/2 justify-center items-center p-2">
        <Heading title={"Signup"} />
        <Subheading p={"Don't have an account? Create one"} />
        <Inputbox onChange={(e)=>{
          setEmail(e.target.value)
        }} label={"Email"} placeholder={"example22@gmail.com"} />
        <Inputbox onChange={(e)=>{
          setFname(e.target.value)
        }} label={"First Name"} placeholder={"Johnyy"} />
        <Inputbox onChange={(e)=>{
          setLname(e.target.value)
        }} label={"Last Name"} placeholder={"Depp"} />
        <Inputbox onChange={(e)=>{
          setPassword(e.target.value)
        }} label={"Password"} placeholder={"Minimum 6 characters"} />
        <SubmitButton onClick={async()=>{
            const res = await axios.post('http://localhost:3000/v1/user/signup',{email:email,password:password ,fname, lname});
            console.log(res.data);
           }} a={"Signup"} />
        <Linker tgt="/login" body="Already have an account? Login" />
      </div>
    </div>
  );
}
