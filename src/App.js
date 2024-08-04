import React,{useState} from "react";
import './App.css';


function App() {
  let [fname,setFname] = useState('');
  let [lname,setLname] = useState('');
  let [fullname,setFullname] = useState('');
  let [check,setCheck] = useState(false);
  const handleData = (event)=>{
    event.preventDefault();
    // if(fname !=="" || lname !== ""){
      let full = fname+" "+lname;
      setFullname(`Full Name: ${full}`);
    // }else{
      // setFullname('')
    // }
  //  setCheck((prev)=>!prev);
  }
  return (
    <div className="App">
       <h1>Full Name Display</h1>
       <form onSubmit={(e)=>handleData(e)}>
        <p><label htmlFor="first">First Name:</label><input type="text" id="first" name="firstname" value={fname} onChange={(e)=>setFname(e.target.value)} required/></p>
        <p><label htmlFor="last">Last Name:</label><input type="text" id="last" name="lastname" value={lname} onChange={(e)=>setLname(e.target.value)} required/></p>
        <button type="submit">Submit</button>
       </form>
       <p>{fullname}</p>

    </div>
  );
}

export default App;
