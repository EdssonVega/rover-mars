import React from "react"
import "./rover.css"

export default function ExerciseCode(){


    


let initialcoordinates = "1 2 N"
let icArray = initialcoordinates.split(" ")

let userCommandLine = "LMLMLMLMM"
let uclArray = userCommandLine.split("")

let roverCoordinates={
    coordinateX: parseInt(icArray[0]),
    coordinateY: parseInt(icArray[1]),
    roverFacing: icArray[2] 
}; 


const rotateRight = (roverCoordinates) => {
    if(roverCoordinates.roverFacing==="N"){ 
        return(
            roverCoordinates.roverFacing ="E"
        )
    }
    if(roverCoordinates.roverFacing==="E"){
        return(
            roverCoordinates.roverFacing="S"
        )
    }
    if(roverCoordinates.roverFacing==="S"){
        return(
            roverCoordinates.roverFacing="O"
        )
    }
    if(roverCoordinates.roverFacing==="O"){
        return(
            roverCoordinates.roverFacing="N"
        )
    }
}

const rotateLeft = (roverCoordinates) =>{
    if(roverCoordinates.roverFacing==="N"){
        return(
            roverCoordinates.roverFacing="O"
        )
    }
    if(roverCoordinates.roverFacing==="O"){
        return(
            roverCoordinates.roverFacing="S"
        )
    }
    if(roverCoordinates.roverFacing==="S"){
        return(
            roverCoordinates.roverFacing="E"
        )
    }
    if(roverCoordinates.roverFacing==="E"){
        return(
            roverCoordinates.roverFacing="N"
        )
    }
}

const moveStraight=(roverCoordinates)=>{
    if(roverCoordinates.roverFacing==="N"){
        return(
            roverCoordinates.coordinateY = roverCoordinates.coordinateY + 1
        )
    }
    if(roverCoordinates.roverFacing==="E"){
        return(
            roverCoordinates.coordinateX = roverCoordinates.coordinateX + 1
        )
    }
    if(roverCoordinates.roverFacing==="S"){
        return(
            roverCoordinates.coordinateY = roverCoordinates.coordinateY - 1
        )
    }
    if(roverCoordinates.roverFacing==="O"){
        return(
            roverCoordinates.coordinateX = roverCoordinates.coordinateX - 1
        )
    }
}


const commandLine = () => {
    for (let uclarrays of uclArray){
        if(uclarrays==="R"){
            rotateRight()
        } 
        else if(uclarrays === "L"){
            rotateLeft()
        }else if(uclarrays === "M"){
            moveStraight()
        }
    }
}

console.log(commandLine)



return(
    <div className="resultContainer">
        respuesta
    </div>
)


}