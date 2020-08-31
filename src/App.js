import React from 'react';
import './App.css';
import WordCard from './WordCard';

let word = "";
let rand = Math.floor(Math.random() * 3);
switch (rand){
  case 0:
    word = "hello"
    break;
  case 1:
    word = "world"
    break;
  case 2:
    word = "computer"
    break;
  case 4:
    word = "king"
    break;
}
function App() {
  return (
    <div>
      <WordCard value={word}/>
    </div>
  );
}

export default App;
