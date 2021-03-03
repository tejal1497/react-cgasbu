import React from "react";
import ReactDOM from "react-dom";

function Registration(){
  return(
    <div>
      <form>
        <h1>Registration</h1>
        Name::<input type="text" /><br/>
        Address ::<input type="text" /><br/>
        Email ::<input type="Email" /><br/>
        Phone Number ::<input type="Number" /><br/>
        <input type="submit" value="Registration" />
      </form>
    </div>
  );
}
export default Registration;