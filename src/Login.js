import React from "react";
import ReactDOM from "react-dom";

function Login(){
  return(
    <div>
      <form>
        <h1>Login</h1>
        Enter name::<input type="text" /><br/>
        Enter password ::<input type="password" /><br/>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;