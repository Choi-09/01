import {Route, Routes} from 'react-router-dom';
import WeatherMain from './components/WeatherMain';
import WeatherMain2 from './components/WeatherMain2';
import Home from './components/Home';

function App() {
  return (
    <>
      
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path='/p1/:term' element={<WeatherMain2 />} />
        <Route path='/p2/:term' element={<WeatherMain />} />
      </Routes>
    </>
  );
}

export default App;