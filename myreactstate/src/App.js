import "./App.css";
import React, { useState } from 'react';

function App (){
const [person, setPerson]= useState({
fullName:"Sana Chelbi",
bio:"I believe in smiling and being happy",
imgr:"https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg",
profession:"I'm a developer web",
});
const [show, setShow]= useState(false);
const [counter, setCounter] = useState(0);

  return (
  <div className= "App">
    <button  onClick={()=>setShow(!show)} className="btn">SHOWS</button>
  
  { show? 
    <div className = "cart">
    <h1>{person.fullName}</h1>
    <img src={person.imgr} alt=""/>
    <h1>{person.bio}</h1>
    <h1>{person.profession}</h1>
    </div>
    : null}
    <p>{counter}</p>
    <button className="but" onClick={()=>setCounter(counter+1)}>Count</button>
   </div>  );
    }

export default App;
