
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [mydata,setdata]= useState([]);
  useEffect(() => {
   userdata();
   }, []);

   const userdata = async ()=>{
     let data = await fetch(`http://localhost:8000/getdata`);
     let actualdata =  await data.json();
     setdata(actualdata)
     console.log(actualdata);

   }
  return (
    <div className="App">
      {mydata.map((item)=>{
        return <> 
        <p>{item.name}</p> 
        <h2>{item.email}</h2> 
        </>
      })}
    
    </div>
  );
}

export default App;
