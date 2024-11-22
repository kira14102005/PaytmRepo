// import './App.css'
import { Inputbox } from './component/Input'
import { Heading } from './component/Heading'
import { Subheading } from './component/Subheading'
import { SubmitButton } from './component/Submit'

function App() {

  return (
    <div className='w-screen h-screen flex justify-center align-center'>
    <div className="shadow-xl h-9/12 grid grid-cols-1 w-1/2  justify-center align-center p-2" >
       <Heading title = {"Login"}></Heading>
       <Subheading p = {"You already have an account so login"} />
       <Inputbox label = {"Email"} placeholder = {"example22@gmaol.com"}></Inputbox>
       <Inputbox label = {"First Name"} placeholder = {"Johnyy"}></Inputbox>
       <Inputbox label = {"Last Name"} placeholder = {"Depp"}></Inputbox>
       <Inputbox label = {"Password"} placeholder = {"Minimum 6 characters"}></Inputbox>
       <SubmitButton a = {"Login"}></SubmitButton>
    </div></div>
  )
}

export default App
