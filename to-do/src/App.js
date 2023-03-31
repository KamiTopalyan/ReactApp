import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';





function App() {
  const initialText = '';
  const [buttonText, setButtonText] = useState(initialText);

  function handleClick() {
    setButtonText("Hello")
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Add</button>
        <div class="vertical-container">
          <row>
            <div class="item">
            </div>
            <div class="item">

            </div>
            <div class="item">

            </div>
          </row>
        </div>
    </div>
  );
}



export default App;
