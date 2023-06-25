import './signin.css'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from 'axios'


export default function Signin() {
  const schema = yup.object().shape({
    Username: yup.string().required(),
    password: yup.string().required()
  });
  const { register, handleSubmit, formState: {errors}}= useForm({
    resolver: yupResolver(schema)
  }
  );
  const onSubmit = (data) => {
    Axios.post("http://localhost:3000/auth/login", data)
    .then(res=> {
      // if(data.token){
      //   alert( 'Login suuccessful');
      // }
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }


  
 
  return (
    <div>
        <div className="container">
          <div className="synccliaDetails">
                <h1>SyncCliA</h1><br/>
                <p>A simple way to sync your climate actions with your friends</p>
                
          </div>
          <div className="formDetails">
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2>Welcome!</h2>
                <input type="text"{...register('Username')}  placeholder='Username' /><br/>
                <p>{errors.Username?.message} </p>
                <input type="password" {...register('password')} placeholder='Password' /><br/>
                <p> {errors.password?.message} </p>
                <input type="submit"  value= "Submit" id='submit-btn'/> <br/>
                <p id='register-para'>Dont Have Account? <button id='btn'>Signup</button></p>

            </form>
           </div>
        </div>
    </div>
  )  
}





