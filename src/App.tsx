import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./Components/PortectedRoute"
import LoginPage from "./Components/Login"
import SignUp from "./Components/SignUp"
import LandingPage from "./Components/LandingPage"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/" element = {<ProtectedRoute/>}>

              <Route index element = {<LandingPage/>}/>
    
              <Route path="/login" element = {<LoginPage/>}/>

              <Route path="/signup" element = {<SignUp/>}/>

            </Route>
            
          </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
