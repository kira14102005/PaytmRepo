import { Inputbox } from '../component/Input'
import { Heading } from '../component/Heading'
import { Subheading } from '../component/Subheading'
import { SubmitButton } from '../component/Submit'
import { Linker } from '../component/Linker'
export function Login(){
    return (
        <div className='w-screen h-screen flex justify-center align-center'>
        <div className="shadow-xl h-11/12 grid grid-cols-1 w-1/2  justify-center align-center p-2" >
           <Heading title = {"Login"}></Heading>
           <Subheading p = {"Login with your credentials"} />
           <Inputbox label = {"Email"} placeholder = {"example22@gmail.com"}></Inputbox>
           <Inputbox label = {"Password"} placeholder = {"Minimum 6 characters"}></Inputbox>
           <SubmitButton a = {"Login"}></SubmitButton>
           <Linker tgt={"/signup"}body={"Don't have an account? Register"}/>
        </div></div>
      )
}