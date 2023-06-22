/* eslint-disable react/jsx-no-comment-textnodes */
import './signin.css'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function Signin() {

  const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
  });
    
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) =>{
    console.log(data);
  }
  return (
    <div>
        <div className="container">
          <div className="formDetails">
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2>Welcome!</h2>
                <input type="text"{...register('email')}  placeholder='Email' /><br/>
                <p>{errors.email?.message} </p>
                <input type="password" {...register('password')} placeholder='Password' /><br/>
                <p> {errors.password?.message} </p>
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
