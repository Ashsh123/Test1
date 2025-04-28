import { useState } from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom';
import './App.css'
import EmpDtl from './Components/EmpDtl'
import EmpLin from './Components/EmpLin'
import Navbar from './Components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path="/" element={<EmpDtl/>}></Route>
              <Route path="/empLin" element={<EmpLin/>}> </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
