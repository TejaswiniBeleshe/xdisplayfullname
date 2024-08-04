import React,{useState} from "react";
import './App.css';


function App() {
  let [fname,setFname] = useState('');
  let [lname,setLname] = useState('');
  let [fullname,setFullname] = useState('')
  const handleData = (event)=>{
    event.preventDefault();
    let full = fname+" "+lname;
    setFullname(`Full Name:${full}`);
    // setFname('');
    // setLname(''); 
  }
  return (
    <div className="App">
       <h1>Full Name Display</h1>
       <form onSubmit={(e)=>handleData(e)}>
        <><label htmlFor="first">First Name:</label><input type="text" id="first" value={fname} onChange={(e)=>setFname(e.target.value)} required/></>
        <><label htmlFor="last">Last Name:</label><input type="text" id="last" value={lname} onChange={(e)=>setLname(e.target.value)} required/></>
        <button>Submit</button>
       </form>
       <p>{fullname}</p>

    </div>
  );
}

export default App;
