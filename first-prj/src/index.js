import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function tick(){
  const element = (
    <div>
      <h1>Hello, Guys</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  
ReactDOM.render(element, document.getElementById("root"));
}

window.setInterval(tick, 1000);



