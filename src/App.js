
import './App.css';
import { useState } from 'react';
import ExerciseCode from './components/userInput/rover/rover';
import UserInput from './components/userInput/userInput';
import ExerciseCodeSR from './components/userInput/secondRover/secondRover';

function App() {
  const [initialcoordinates, setInitialcoordinates] = useState();
  const [userCommandLine, setUserCommandLine] = useState()

  const [initialcoordinatesSR, setInitialcoordinatesSR] = useState();
  const [userCommandLineSR, setUserCommandLineSR] = useState()

  const [submit, setSubmit] = useState(false)

  return (
    <div className="App">
      <UserInput setInitialcoordinates={setInitialcoordinates} setUserCommandLine={setUserCommandLine} setInitialcoordinatesSR={setInitialcoordinatesSR} setUserCommandLineSR={setUserCommandLineSR} setSubmit={setSubmit}/>
    <div className={`${submit===true?"resultContainer":"resultContainerHidden"}`}>
      <ExerciseCode initialcoordinates={initialcoordinates} userCommandLine={userCommandLine} submit={submit} setSubmit={setSubmit}/>
      <ExerciseCodeSR initialcoordinatesSR={initialcoordinatesSR} userCommandLineSR={userCommandLineSR} submit={submit} setSubmit={setSubmit}/>
    </div>
    </div>
  );
}

export default App;
