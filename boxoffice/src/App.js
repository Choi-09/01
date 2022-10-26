import { Route, Routes} from 'react-router-dom' ;
import BoxOfficeList from './components/BoxOfficeList' ;
import MvInfo from'./components/MvInfo';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<BoxOfficeList />} /> 
        <Route path='/MvInfo/:mvcd' element = {<MvInfo />} />
      </Routes>
    </>
  );
}

export default App;