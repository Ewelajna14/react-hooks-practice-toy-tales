import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {

const toyContainer= toys.map((toy)=>{
  return(<ToyCard key={toy.id} toy={toy} onDelete={onDelete} onLike={onLike}/>)
})

  return (
    <div id="toy-collection">{toyContainer}</div>
  );
}

export default ToyContainer;
