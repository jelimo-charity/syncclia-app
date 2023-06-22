import { useForm } from "react-hook-form"
// import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"

export function Signup() {
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Email: yup.string().email().required("Email is required"),
    Password: yup.string().required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data)=>{
    axios.post("http://localhost:3000/auth/signup", data)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
    // navigate("/login")
    
    // console.log(data);

  }


  return (
    <div className='container'>

        <div className="formField">
            <h2>Welcome to SyncCliA!</h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Username' { ...register("Username") } /><br/>
                <p>{errors.Username?.message}</p>
                <input type="email" placeholder='Email' { ...register ("Email")} /><br/>
                <p>{errors.Email?.message}</p>
                <input type="password" placeholder='Password' { ...register("Password")} />
                  <p>{errors.Password?.message}</p>
                <input type="submit" value="Submit" id='btn'/>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
