import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [chosenLevel, setChosenLevel] = useState (null)
  
const getRandomWords = () => { 

const options = {
  method: 'GET',
  url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
  params: {level: chosenLevel, area: 'sat'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
  }
}

axios.request(options).then((response) => {
	console.log(response.data)
}).catch( (error) => {
	console.error(error)
})
}
  return (
    <div className="App">
      <select name='levels' id='levels' value={chosenLevel} onChange={(e) => setChosenLevel(e.target.value)}>
        <option value='1'>Level 1</option>
        <option value='2'>Level 2</option>
        <option value='3'>Level 3</option>
        <option value='4'>Level 4</option>
        <option value='5'>Level 5</option>
      </select>
    </div>
);
}

export default App;
