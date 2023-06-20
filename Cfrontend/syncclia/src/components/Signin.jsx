import React from 'react'
import './signin.css'

function Signin() {
  return (
    <div>
        <div className="container">
            <div className="formDetails">
              <form>
                <h2>Welcome</h2>
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="submit" />
              </form>
              <p>Don't Have Account? <button>Signup</button></p>

            </div>
            <div className="synccliaDetails">
                <h1>SyncCliA</h1>
                
            </div>

       

        </div>

       
      
    </div>
  )
}

export default Signin
