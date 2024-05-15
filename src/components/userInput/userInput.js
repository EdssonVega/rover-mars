import React from "react";
import "./userInput.css"

export default function UserInput({sendInfo}){


    const getInitialCoordinatesRoverOne = (e) =>{
        let userInputcoordinates = e.target.value
        console.log(userInputcoordinates)
        return userInputcoordinates
    }

    
    

    return(
        <section className="form">
            <label htmlFor="plateau">Set the size of the plateau: </label>
            <input type="text" placeholder="Example: 5 5" id="plateau"/>
            <label htmlFor="roverInitialCoordinate">Set the inicial coordinate of the 1st rover:</label>
            <input type="text" placeholder="Example: 1 2 N" id="roverInitialCoordinate" onChange={getInitialCoordinatesRoverOne}/>
            <label htmlFor="roverMovement">Set the movement of the 1st rover:</label>
            <input type="text" placeholder="Example: LMLMLMLMM" id="roverMovement"/>           
        </section>
    )
}