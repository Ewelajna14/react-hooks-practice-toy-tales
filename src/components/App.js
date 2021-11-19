import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const[toys, setToys]= useState([])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then( r => r.json())
    .then( data => setToys(data))
  }, [])

  function handleCreateForm(newToy){
    setToys([...toys, newToy ])
  }

  function handleRemoveButton(deletedToy){
    const updatedItems = toys.filter((toy) => toy.id !== deletedToy.id);
  setToys(updatedItems);
  }
  
function handleLikeButton(updatedToy){
  const updatedToys = toys.map((toy)=>{
    if(toy.id===updatedToy.id){
      return updatedToy
    }else{
      return toy
    }
  })
  setToys(updatedToys)
}

  return (
    <>
      <Header />
      {showForm ? <ToyForm onCreateForm ={handleCreateForm}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleRemoveButton} onLike={handleLikeButton}/>
    </>
  );
}

export default App;
