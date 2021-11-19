import React, {useState} from "react";

function ToyForm({onCreateForm}) {

const[name, setName]=useState("")
const[image, setImage]=useState("")

function handleNameChange(event){
setName(event.target.value)
}

function handleImageChange(event){
setImage(event.target.value)
}

function handleSubmit(event){
  event.preventDefault()
  const newToy ={
    name:name,
    image:image,
    likes:0
  }
  fetch("http://localhost:3001/toys", {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(newToy),
  })
  .then((r)=> r.json())
  .then((newToy)=> onCreateForm(newToy))

  setName("")
  setImage("")
}


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
        />
        <br />
        <input onChange={handleImageChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
