
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Actions from './pages/Actions'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Header from './components/Header'



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

    </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
