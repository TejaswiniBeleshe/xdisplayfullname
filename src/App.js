import React,{useState} from "react";
import './App.css';


function App() {
  let [fname,setFname] = useState('');
  let [lname,setLname] = useState('');
  let [fullname,setFullname] = useState('')
  const handleData = (e)=>{
    e.preventDefault();
    setFullname(`${fname} ${lname}`);
    setFname('');
    setLname(''); 
  }
  return (
    <div className="App">
       <form onSubmit={(e)=>handleData(e)}>
        <p>First Name:<input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} required/></p>
        <p>Last Name:<input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} required/></p>
        <button type='submit'>Submit</button>
       </form>

       <h2>{fullname}</h2>

    </div>
  );
}

export default App;
