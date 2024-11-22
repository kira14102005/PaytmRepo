// import './App.css'
import { Inputbox } from './component/Input'
import { Heading } from './component/Heading'
import { Subheading } from './component/Subheading'
import { SubmitButton } from './component/Submit'
import { Signup } from './routes/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './routes/Signin'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
