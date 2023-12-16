import ReactPlayer from "react-player"
import useMediaStream from "./op"
import React from "react";


function App() {
  const {stream} = useMediaStream() ;
  console.log(stream) 
  return (
    <>

      <ReactPlayer url={stream} playing  height="400px" width="400px"  />
   
    
     
    </>
  )
}

export default App
