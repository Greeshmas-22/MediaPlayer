import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Top from './Components/Top'
import Footer from './Components/Footer'


function App() {
 
  return (
    <>
    <Top/>
    {/* /represent base url */ } {/* provide path to each components to feel as different pages in react which is single page application here each page appears to be different  */}
   <Routes>
   <Route path='/'element={<Landing/>}  />
   <Route path='/home' element={<Home/>} />
   <Route path='/watch-history' element={<Watchhistory/>} />
   </Routes>
   <Footer/>
    </>
  )
}


export default App
