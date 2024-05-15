import React from "react";
import "./userInput.css"

export default function UserInput({setInitialcoordinates,setUserCommandLine, setSubmit}){

    const getInitialCoordinatesRoverOne = (e) =>{
        let userInputcoordinates = e.target.value
        setInitialcoordinates(userInputcoordinates);
    }
     
    const getCommandLine = (e) =>{
        let userInputCommandLine = e.target.value
        setUserCommandLine(userInputCommandLine);
    }
    
    const calculate = () => {
        setSubmit(true);
    }
    
    

    return(
        <section className="form">
            <label htmlFor="plateau">Set the size of the plateau: </label>
            <input type="text" placeholder="Example: 5 5" id="plateau"/>

            <label htmlFor="roverInitialCoordinate">Set the initial coordinate of the 1st rover:</label>
            <input type="text" placeholder="Example: 1 2 N" id="roverInitialCoordinate" onChange={getInitialCoordinatesRoverOne}/>
            <label htmlFor="roverMovement">Set the movement of the 1st rover:</label>
            <input type="text" placeholder="Example: LMLMLMLMM" id="roverMovement" onChange={getCommandLine}/> 

            <label htmlFor="secondRoverInitialCoordinate">Set the initial coordinate of the 2nd rover:</label>
            <input type="text" placeholder="Example: 1 2 N" id="secondRoverInitialCoordinate" onChange={getInitialCoordinatesRoverOne}/>
            <label htmlFor="secondRoverMovement">Set the movement of the 2nd rover:</label>
            <input type="text" placeholder="Example: LMLMLMLMM" id="secondRoverMovement"/>
            <button onClick={calculate}>Calculate</button>          
        </section>
    )
}