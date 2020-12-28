import './App.css';

// import Counter from './Counter'; 

import {FaStar} from 'react-icons/fa'

import React, {useState} from 'react'
const MyFunction = () => {
  return <div>
    <h2>Hello From MyFunction</h2>
  </div>
}

const createArray =(length) => [...Array(length)]; 

function Star ({selected=false, onSelect}) {
  return <FaStar color={selected?"red":"black"} onClick={onSelect} /> 
}

function StarRating ({totalStars}) {

  const [selectedStars, setSelectedStars] = useState(0)

  return(
    <div>
      {
        createArray(totalStars).map((n, i) => (
          <Star 
            key={i} 
            selected={selectedStars>i}
            onSelect={()=> setSelectedStars(i+i)} /> 
        ))
        } 
        <p> {selectedStars} of {totalStars} </p>
        </div>
  )
}

function App() {
 
  return (
    <div className="App">
   
      {/* <Counter />  */}
      <StarRating totalStars={10} /> 
    </div>
  );
}

export default App;
