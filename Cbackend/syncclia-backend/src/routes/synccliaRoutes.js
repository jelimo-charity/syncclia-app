import { createAction, deleteAction, getAction, getActions, updateAction } from "../controllers/actionControllers.js"
import { createBlog, deleteBlog, getBlog, getBlogs } from "../controllers/blogControllers.js"
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userControllers.js"
import { loginRequired, signup, login } from "../controllers/usercontrolauth.js"
// import { login } from "../controllers/usercontrolauth.js"

export const synccliaRoutes = (app) =>{
    // app.route('/users')
    //  .get(getUsers)
    //  .post(createUser)

    // app.route('/users/:UserID')
    //  .get(getUser)
    //  .put(updateUser)
    //  .delete(deleteUser)


    app.route('/actions/:ActionID')
     .get(loginRequired,getAction)
     .delete(deleteAction)
     .put(updateAction)
     
    // app.route('/blogs/:BlogId')
    //  .get(getBlog)
    //  .delete(deleteBlog)

    app.route('/actions')
      .get( getActions)
      .post(createAction)
      
      
    
    app.route('/blogs')

      .get(getBlogs)
      .post(createBlog)


      

//auth routes

app.route('/auth/signup')
.post(signup)


app.route('/auth/login')
.post(login)

}

