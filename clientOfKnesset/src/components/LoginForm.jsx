import { Form, redirect, useActionData } from "react-router-dom";
import axios from 'axios'



export default function LoginForm() {
    let status = useActionData()
  return (
    <>
    <Form className="login-form" action="/connection-area/login" method="post" >
    <input name="user-name" id="user-name-l" type="text" placeholder="שם משתמש" autoComplete="username" />
    <input name="password" id="password" type="password" placeholder="סיסמה" autoComplete="current-password" />
    <button id="log-in" type="submit">
      התחבר
    </button>
  </Form>  
  {status && status.error && <p>Username or password is incorrect</p>}
  </>
  )
}
// the action when form is submited, check if is valid username and password
export const loginAction = async ({request})=>{
    const loginDetails = Object.fromEntries(await request.formData());  
    const checkValidLogin = async(loginDetails)=>{
        const response = await axios.post(import.meta.env.VITE_SERVER_GATE+'connection/login',{loginDetails})
        return response.data.status
    } 
    // direct according the status response
    let status = await checkValidLogin(loginDetails)
    console.log(status);
    if(status) {
        return redirect('/core')
    }
    else{
        return  {error: true}
    }
}
