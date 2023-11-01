import axios from "axios";
import { Form, redirect, useActionData } from "react-router-dom";
// registratiom form
export default function RegistrationForm() {
  let errordetails = useActionData()
  return (
    <>
<Form method="post" action="/connection-area/register" className="registration-form">
        <input
          name="userName"
          id="user-name-r"
          type="text"
          placeholder="שם משתמש"
          autoComplete="username"
        />
        <input
          name="email"
          id="email"
          type="email"
          placeholder="אימייל"
          autoComplete="email"
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="סיסמה"
          autoComplete="new-password"
        />
        <input
          name="confirmPassword"
          id="Confirm-password"
          type="password"
          placeholder="אישור סיסמה"
          autoComplete="new-password"
        />
        <button id="register" type="submit">
          הירשם
        </button>
      </Form>  
      {errordetails && errordetails.error && <p>{errordetails.error}</p>}
      </>
      )
}

// check the fields and send to node server
export const registerAction = async ({request})=>{
  let registerDetails = Object.fromEntries(await request.formData()); 
  // Function to check if a field has an empty string
  const isEmptyString = (field) => {
    return !registerDetails[field] || registerDetails[field] === '';
  }

  // Function to check if password and confirm password are equal
  const arePasswordsEqual = () => {
    return registerDetails.password === registerDetails.confirmPassword;
  }

  // Check if any field has an empty string
  if (isEmptyString('userName') || isEmptyString('email') || isEmptyString('password') || isEmptyString('confirmPassword')) {
    return { error: 'Please fill in all fields.' };
  }

  // Check if password and confirm password are equal
  if (!arePasswordsEqual()) {
    return { error: 'Password and confirm password do not match.' };
  }
  // send the form to node server
  const checkRegisterStatus = async(registerDetails)=>{
    const response = await axios.post(import.meta.env.VITE_SERVER_GATE+'connection/register',{registerDetails})
    // return the respons that back from server
    console.log(response.data);
    return response.data.status
  } 
  
  const status =await checkRegisterStatus({
    userName: registerDetails.userName,
    email: registerDetails.email,
    password: registerDetails.password})
    
  // route according the reponse 
  if(status === 'ok'){
    return redirect('/connection-area/postRegister')
  }
  else{
    return {error: status}
  }

} 
