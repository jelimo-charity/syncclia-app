/* eslint-disable react/jsx-no-comment-textnodes */
import './signin.css'

function Signin() {
  return (
    <div>
        <div className="container">
          <div className="formDetails">
            <form>
                <h2>Welcome!</h2>
                <input type="text" placeholder='Email' /><br/>
                <input type="password" placeholder='Password' /><br/>
                <input type="submit" /> <br/>
                <p>Dont Have Account? <button>Signup</button></p>

              </form>
              

            </div>
            <div className="synccliaDetails">
                <h1>SyncCliA</h1><br/>
                <p>A simple way to sync your climate actions with your friends</p>
                
                
            </div>

       

        </div>

       
      
    </div>
  )
}

export default Signin
