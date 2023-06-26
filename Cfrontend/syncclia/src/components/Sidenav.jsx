import './sidenav.css'
import {FaUser} from 'react-icons/fa'
function Sidenav() {
  return (
    <div>
        <div className="sidenav">
            <div className="sidenav-wrapper">
                <div className="sidenav-header"> <FaUser/>My Profile </div>
            </div>
            <div className="sidenav-wrapper">
                <div className="sidenav-item"> Add Action </div> 
            </div>
            <div className="sidenav-item"> View Actions </div>
        </div>
      
    </div>
  )
}

export default Sidenav
