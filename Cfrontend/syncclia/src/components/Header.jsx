import  { Link } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className='navlinks'>
        <Link className='link' to="/">Home</Link>
        <Link className='link'to="/about">About</Link>
        <Link className='link' to="/blogs">Blogs</Link>
        <Link className='link' to="/actions">Actions</Link>


        

      
    </div>
  )
}

export default Header
