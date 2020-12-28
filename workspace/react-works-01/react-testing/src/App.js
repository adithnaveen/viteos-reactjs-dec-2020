import './App.css';
 
import React, {useState, useEffect} from 'react'


function App() {
 
  const [data, setData] = useState([])

  // componentDidMount, componentDidUpdate
  useEffect(() =>{
    fetch("https://api.github.com/users")
      .then(resp => resp.json())
      .then(setData)
  }, [])


  return (
    <div className="App">
      {data.map((user)=>(
        <li key={user.id}>{user.login}</li>
      ))}
  <hr /> 
      <button onClick={() => setData([])}>Clear Data </button> 
    </div>
  );
}

export default App;
