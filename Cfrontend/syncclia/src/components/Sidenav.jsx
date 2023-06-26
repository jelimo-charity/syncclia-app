import { useContext } from 'react'
import './sidenav.css'
import {FaUser} from 'react-icons/fa'
import { Context } from '../context/actionContext/Context'


function Sidenav() {
  const { dispatch } = useContext(Context)
  const handleProfile = () => {
    dispatch({ type: "PROFILE", payload: "profile"})
  }
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: "add"})
  }
  const handleView = () => {
    dispatch({ type: "VIEW", payload: "view"})
  }
  return (
    <div>
        <div className="sidenav">
            <div className="sidenav-wrapper">
                <div className="sidenav-header" onClick={handleProfile}> <FaUser/>My Profile </div>
            </div>
            <div className="sidenav-wrapper">
                <div className="sidenav-item" onClick={handleAdd}> Add Action </div> 
            </div>
            <div className="sidenav-item" onClick={handleView}> View Actions </div>
        </div>
      
    </div>
  )
}

export default Sidenav
