
import './App.css';
import { useState } from 'react';
import ExerciseCode from './components/userInput/rover/rover';
import UserInput from './components/userInput/userInput';

function App() {
  const [initialcoordinates, setInitialcoordinates] = useState();
  const [userCommandLine, setUserCommandLine] = useState()
  const [submit, setSubmit] = useState(false);

  return (
    <div className="App">
      <UserInput setInitialcoordinates={setInitialcoordinates} setUserCommandLine={setUserCommandLine} setSubmit={setSubmit}/>
      <ExerciseCode initialcoordinates={initialcoordinates} userCommandLine={userCommandLine} submit={submit} setSubmit={setSubmit}/>
    </div>
  );
}

export default App;
