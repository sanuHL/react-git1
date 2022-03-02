import React from "react";
import "./style.css";
import script from './script';


export default function App() {
  return (
    <div>
      <h1>Git hub search!</h1>
     <form id="my form" autoComplete = "off">
       <div className="form-group">
         <input type="text" className= "form-control" id="search" placeholder= "search user name" required/>
       </div>
      <div className="form-group">
        <button className="btn">
          Search user
        </button>
       
      </div>
     </form>
     <script src="script.js"></script>
    </div>
  );
}
