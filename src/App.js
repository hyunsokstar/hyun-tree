import React from 'react';
import './App.css';
import Tree from './components/Tree';


function App() {
  return (
    <div className="App" 
         style={
                {
                  width:"40%",
                  border: "1px solid #c7c2c2",
                  marginTop: "20px"
                }
              }
    >
      <Tree/>
    </div>
  );
}

export default App;
