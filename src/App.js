import React, { useState } from "react";
import data from "./data";
import Toures from "./Component/Toures";
const App = () => {
  const[tours,setTours]=useState(data);
 function  removeTours(id){
    const newTours = tours.filter( tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){return (
    <div className="refresh">
      <h2>No tours Left</h2>
      <button className="btn-white" onClick={()=>{setTours(data)}}>Refresh</button>
    </div>
  );
  }
  return (<div className="App">
    <Toures tours={tours} removeTours={removeTours}></Toures>
  </div>);
};

export default App;
