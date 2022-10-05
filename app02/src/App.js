import logo from './logo.svg';
import './App.css';
import MyTick from './mycomponents/MyTick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyTick />
    </div>
  );
  
}

export default App;
