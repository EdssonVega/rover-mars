import React from "react";
import "./rover.css";


export default function ExerciseCode({ initialcoordinates = "", userCommandLine = "", submit, setSubmit }) {
    let icArray = initialcoordinates.split(" ");
    let uclArray = userCommandLine.split("");
  
    let coordinateX = parseInt(icArray[0]);
    let coordinateY = parseInt(icArray[1]);
  
    let facing = icArray[2];
  
    const rotateRight = () => {
      if (facing === "N") {
        return (facing = "E");
      }
      if (facing === "E") {
        return (facing = "S");
      }
      if (facing === "S") {
        return (facing = "O");
      }
      if (facing === "O") {
        return (facing = "N");
      }
    };
  
    const rotateLeft = () => {
      if (facing === "N") {
        return (facing = "O");
      }
      if (facing === "O") {
        return (facing = "S");
      }
      if (facing === "S") {
        return (facing = "E");
      }
      if (facing === "E") {
        return (facing = "N");
      }
    };
  
    const moveStraight = () => {
      if (facing === "N") {
        return (coordinateY = coordinateY + 1);
      }
      if (facing === "E") {
        return (coordinateX = coordinateX + 1);
      }
      if (facing === "S") {
        return (coordinateY = coordinateY - 1);
      }
      if (facing === "O") {
        return (coordinateX = coordinateX - 1);
      }
    };
  
    let commandLine = () => {
      for (let uclarrays of uclArray) {
        if (uclarrays === "R") {
          rotateRight();
        } else if (uclarrays === "L") {
          rotateLeft();
        } else if (uclarrays === "M") {
          moveStraight();
        }
      }
      console.log(coordinateX, coordinateY, facing);
    };
  
    if (submit === true) {
      commandLine();    
      setSubmit(false); 
    }

  return (
    <div className="resultContainer">
      <h1>
        1st rover final destination:
        <span>
         {submit === false ?  "" + coordinateX + " " + coordinateY + " "  + facing  : "" }
        </span>
      </h1>
    </div>
  );
}
