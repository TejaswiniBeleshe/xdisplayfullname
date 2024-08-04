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
        <p>First Name:<input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} required/></p>
        <p>Last Name:<input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} required/></p>
        <button>Submit</button>
       </form>
       <p>{fullname}</p>

    </div>
  );
}

export default App;
