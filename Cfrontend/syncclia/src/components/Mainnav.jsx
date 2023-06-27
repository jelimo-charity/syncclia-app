import './mainnav.css'
import { useContext } from 'react'
import { Context } from '../context/actionContext/Context'
function Mainnav() {
  const { ui } = useContext(Context)
  console.log(ui);
  return (
    <div>
        <div className="mainnav">
          {
            ui == 'add' ? (
              <div className="mainnav-wrapper">
            <h2> Add Action</h2>
          </div>

            ) : ui == 'profile' ? (
              <div className="mainnav-wrapper">
            <h2>User Profile</h2>
          </div>
            ) : ui == 'view' ? (
              <div className="mainnav-wrapper">
              <h2>View Actions</h2>
            </div>

            ) : null
          
            }
        </div>
      
    </div>
  )
}

export default Mainnav
