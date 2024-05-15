const rotateRight = (roverFacing) =>{
    if(roverFacing==="N"){
        return(
            roverFacing="E"
        )
    }
    if(roverFacing==="E"){
        return(
            roverFacing="S"
        )
    }
    if(roverFacing==="S"){
        return(
            roverFacing="O"
        )
    }
    if(roverFacing==="O"){
        return(
            roverFacing="N"
        )
    }
}

const rotateLeft = (roverFacing) =>{
    if(roverFacing==="N"){
        return(
            roverFacing="O"
        )
    }
    if(roverFacing==="O"){
        return(
            roverFacing="S"
        )
    }
    if(roverFacing==="S"){
        return(
            roverFacing="E"
        )
    }
    if(roverFacing==="E"){
        return(
            roverFacing="N"
        )
    }
}

const moveStraight=(roverFacing)=>{
    if(roverFacing==="N"){
        return(
            roverCoordinates = {X:coordinateX, Y:coordinateY + 1}
        )
    }
    if(roverFacing==="E"){
        return(
            roverCoordinates = {X:coordinateX + 1, Y:coordinateY}
        )
    }
    if(roverFacing==="S"){
        return(
            roverCoordinates = {X:coordinateX, Y:coordinateY - 1}
        )
    }
    if(roverFacing==="O"){
        return(
            roverCoordinates = {X:coordinateX - 1, moveY:coordinateY}
        )
    }
}