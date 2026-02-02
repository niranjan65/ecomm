import { useState } from "react";
import axios from "axios";

export default function ResetPasswordRequest() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  

   async function sendResetPasswordEmail() {
  try {
    const response = await axios.post(
      "https://mycardpng.com/api/method/custom.api.reset_password.custom_reset_password",   {
        email: email, 
      },
       {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
  }
}
   
    );

    console.log(response.data.message);
    alert("Reset password email sent successfully");
  } catch (error) {
    console.error(error);
    alert("Failed to send reset email");
  }
}

  return (
    <div>
      <h2>Forgot Password?</h2>
      <input 
        type="email" 
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendResetPasswordEmail}>Send Reset Link</button>

      <p>{msg}</p>
    </div>
  );
}
