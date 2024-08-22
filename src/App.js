import './App.css';
import Navbar from './Navbar.js';
import data from './data.js';
import Main from './Main.js'

function App() { 
  const cardData = data.map(item => {
    return (
        <Main 
          key={item.id}
          item={item}  
        />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className='space'></div>
      {cardData}
    </div>
  );
}

export default App;
