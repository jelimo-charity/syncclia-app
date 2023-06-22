
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Actions from './pages/Actions'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Header from './components/Header'
import Register from './pages/Register'



function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = { <Home />} />
      <Route path='/actions' element = { <Actions />} />
      <Route path='/blogs' element = { <Blogs />} />
      <Route path='/about' element = { <About />} />
      <Route path='/notfound' element = { <NotFound />} />
      <Route path='/register' element = { <Register />} />

    </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
