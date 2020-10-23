import React , { useState } from 'react';
import './App.css';
import { FaStar } from 'react-icons/fa';

function App() {
  const[rating , setRatingValue]= useState();
  const[hover , setHover]= useState();

  return (
    <div className="App">
     <h1>Rate the component</h1> 

     <h4>{rating ? `You gave ${rating} star rating`: 'please give your rating'} </h4>
     {[...Array(5)].map((star, index) =>{
       const ratingValue = index+1;
        return <>
          <label>
            <input type="radio" name="rating"  value={ratingValue}/>
            <FaStar 
              key={index} 
              size={50} 
              onClick={()=>setRatingValue(ratingValue)}
              color= {ratingValue<= (hover ||rating) ? '#FDCC00': '#808080'}
              onMouseEnter={()=>setHover(ratingValue)}
              OnMouseLeave= {()=>setHover()}
              />
           </label>
         </>
     })
      }
    
    </div>
  );
  
}

export default App;
