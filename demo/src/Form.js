import React from "react";
import {useState} from "react"
function  Form()
{
  const [error,setError]=useState(false);
  const [err,setErr]=useState(false);
 
    function getdata(e)
    {
        e.preventDefault();
    }
    function useHandler(e)
    {
        let item = e.target.value;
        if (item.length>3)
        {
          setError(false);
            
        }
        else{
          setError(true);
          console.log("invalid name")
        }
      }
      function useCheckpwd(e){
         let item = e.target.value;
         if (item.length>4)
         {
          setErr(false);
           
         }
         else{
          setErr(true);
          console.log("invalid password")
         }
      }
      return(
        <div>
             <h1>LOGIN</h1>
             <form onSubmit={getdata}>
                <input type="text" placeholder="userID"  onChange={useHandler} ></input>{error?<span>invalid name</span>:" "}<br/><br/>   
                <input type="text" onChange={useCheckpwd}></input>{err?<span>invalid password</span>:" "}<br/><br/>
                <button>submit</button>
             </form>
        </div>
      )
}
export default Form