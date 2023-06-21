import './signup.css'
function Signup() {
  return (
    <div className='container'>

        <div className="formField">
            <h2>Welcome to SyncCliA!</h2>
            <form>
                <input type="text" placeholder='Username' /><br/>
                <input type="email" placeholder='Email' /><br/>
                <input type="password" placeholder='Password' />
                <input type="button" value="Submit" id='btn'/>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
