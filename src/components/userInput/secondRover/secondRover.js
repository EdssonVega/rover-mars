import React from "react";
import "./secondRover.css";


export default function ExerciseCodeSR({ initialcoordinatesSR = "", userCommandLineSR = "", submit, setSubmit }) {
    let icArraySR = initialcoordinatesSR.split(" ");
    let uclArraySR = userCommandLineSR.split("");
  
    let coordinateXSR = parseInt(icArraySR[0]);
    let coordinateYSR = parseInt(icArraySR[1]);
  
    let facingSR = icArraySR[2];
  
    const rotateRightSR = () => {
      if (facingSR === "N") {
        return (facingSR = "E");
      }
      if (facingSR === "E") {
        return (facingSR = "S");
      }
      if (facingSR === "S") {
        return (facingSR = "O");
      }
      if (facingSR === "O") {
        return (facingSR = "N");
      }
    };
  
    const rotateLeftSR = () => {
      if (facingSR === "N") {
        return (facingSR = "O");
      }
      if (facingSR === "O") {
        return (facingSR = "S");
      }
      if (facingSR === "S") {
        return (facingSR = "E");
      }
      if (facingSR === "E") {
        return (facingSR = "N");
      }
    };
  
    const moveStraightSR = () => {
      if (facingSR === "N") {
        return (coordinateYSR = coordinateYSR + 1);
      }
      if (facingSR === "E") {
        return (coordinateXSR = coordinateXSR + 1);
      }
      if (facingSR === "S") {
        return (coordinateYSR = coordinateYSR - 1);
      }
      if (facingSR === "O") {
        return (coordinateXSR = coordinateXSR - 1);
      }
    };
  
    let commandLineSR = () => {
      for (let uclarraysSR of uclArraySR) {
        if (uclarraysSR === "R") {
          rotateRightSR();
        } else if (uclarraysSR === "L") {
          rotateLeftSR();
        } else if (uclarraysSR === "M") {
          moveStraightSR();
        }
      }
      console.log(coordinateXSR, coordinateYSR, facingSR);
    };
    
    if (submit === true) {
        commandLineSR();    
        /*setSubmit(false); */
      }
  
    return (
        <h1>
          2nd rover final destination:
          <span>
             {coordinateXSR} {coordinateYSR} {facingSR}
          </span>
        </h1>
    );
  }
  
