import React, { useEffect, useState } from 'react';

function Component() {
  const [counter, setCounter] = useState(0);
  
  let interval= null; 

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCount => prevCount + 1);
    }, 1000);
    return () =>{ clearInterval(interval);
    };
  }, []);


 
 
 
  function stop() {
    
    clearInterval(interval); 
  }


  function reset() {
    setCounter(0);
   
  }

  return (
    <div style={{ backgroundColor: "pink", width: "400px", margin: "auto", height: "400px", marginTop: "200px",borderRadius:"50px",boxShadow:"2px 4px 6px 4px grey" }}>
      <h2 style={{ textAlign: "center", color: 'blue', textDecoration: "underline", textShadow: "2px white",position:"relative", top:"10%" ,textShadow:"2px 2px white"}}>Automatic-Counter</h2>
      <h6 style={{ textAlign: "center",position:"relative", top:"20%" }}>Let the counter do the work for you</h6>
      <span style={{ display: "block", width: "200px", height: "50px", textAlign: "center", marginLeft: "auto", marginRight: "auto", fontSize: "24px",position:"relative",top:"30% "}}>{counter}</span>
      <br />
      <div style={{ textAlign: "center", marginTop:"120px" }}>
        <button style={{ background: "red", margin: "5px", color: "white" ,borderColor:"white",borderRadius:"31px"  }} onClick={stop}>Stop</button>
        <button style={{ background: "orange", margin: "5px", color: "white",borderColor:"white", borderRadius:"31px" }} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Component;
