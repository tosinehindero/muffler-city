/* eslint-disable no-unused-vars */
import React from "react";
import AuthenticationForm from "./AuthenticationForm";
import { json, redirect } from "react-router-dom";


function AdminAccessPage() {
   return (
      <>
      <AuthenticationForm/>
      </>
   );
}

export default AdminAccessPage;


export async function action({request}){

const searchParams = new URL(request.url).searchParams;
const mode = searchParams.get('mode') || 'login';

if (mode !== 'login'  && mode !== 'signup') {
   throw json({message: 'unsupported mode'}, {status:422});
}

 const data = await request.formData();
 const authData = {
   email: data.get('email'),
   password: data.get('password'),
 };


 console.log(authData.email);
 console.log(authData.password);


   //soon:manage token
   return redirect('/');
}




// const response = await fetch('http://localhost:8080/' + mode, {
//    method: 'POST',
//    headoers: {
//       'content-Type' : 'application/json'
//    },
//    body:JSON.stringify(authData)
// });

// if (response.status === 422 || response.status === 401) {
//    return response;
// }

// if(!response.ok)
//    throw json({message: 'could not authenticate user.'}, {status:500});