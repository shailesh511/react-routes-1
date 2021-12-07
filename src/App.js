import React from 'react'
import { BrowserRouter,
  Routes,
  Route,} from 'react-router-dom'
import NavBar from './Components/Navbar'
import Contact from './Components/Contact'
import Login from './Components/Login'
import About from './Components/About'
import Services from './Components/Services'

function App() {
  return (
    <>
     <BrowserRouter>
        <NavBar/>
        <div className="container my-3">
        <Routes>
          <Route path="/about-us" element={<About/>}>  </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/services" element={<Services/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
        </Routes>
        </div>
        </BrowserRouter>
   </>
  )
}

export default App