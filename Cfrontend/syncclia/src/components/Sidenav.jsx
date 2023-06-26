import './sidenav.css'
import {FaUser} from 'react-icons/fa'
import {MdOutlineAddTask} from 'react-icons/md'
import {MdOutlineViewList} from 'react-icons/md'
function Sidenav() {
  return (
    <div>
        <div className="sidenav">
            <div className="sidenav-wrapper">
                <div className="sidenav-header"> <FaUser/>My Profile </div>
            </div>
            <div className="sidenav-wrapper">
                <div className="sidenav-item"> <MdOutlineAddTask/> Add Action </div> 
                <div className="sidenav-item"> <MdOutlineViewList/> View Actions </div>

            </div>
        </div>
      
    </div>
  )
}

export default Sidenav
