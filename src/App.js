
import './App.css';
import Layout from './Components/layout';
import Navbar from './Components/navbar';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import ScrollAnimation from './Components/ScrollAnimation';


function App() {
  const [progress,steprogress]=useState(0);
  function setnn(progress){
    steprogress(progress);
  }
  return (
    <div className="App">
       <LoadingBar
        color='red'
        progress={progress}
   
      />
         <LoadingBar
         height={4}
         color='red'
         progress={progress}
       />
   <Navbar />
   <br/>
   <br/>
  
   <Layout setnn={setnn}/>
   <ScrollAnimation />
    </div>
  );
}

export default App;


