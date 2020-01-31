import React from 'react';
import './App.css';

const Ninjas= ({ninjas, deleteNinja}) =>{
  
    const ninjaList = ninjas.map(ninja =>{

      if(ninja.age >20){
        return (
          <div className="ninja" key={ninja.id}>
              <div>Name: {ninja.name}</div>
              <div>Age : {ninja.age}</div>
              <div>Belt; {ninja.belt}</div>
              <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
              <div><br></br></div>
          </div>

          )
        }else{
          return null;
        }
      });
      
      // const ninjaList = ninjas.map(ninja =>{
      //    return ninja.age >40 ? (
      //   <div className="ninja" key={ninja.id}>
      //          <div>Name: {ninja.name}</div>
      //          <div>Age : {ninja.age}</div>
      //          <div>Belt; {ninja.belt}</div>
      //          <div><br></br></div>
      //   </div>
      //    ) : null;
      // })


    return (
      <div className="ninja">
        {ninjaList}
      </div>
    )
}

export default Ninjas;
