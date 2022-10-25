import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Nav from './pages/Nav';

function App() {
  return (
    <>
      <Nav />
      {/* 실제 실행되는 구문은 아니다. url 뒤에 path 적으면 해당 페이지로 이동 */}
      <Routes>
        <Route path='/' element={<Home />} />  {/* '/': 루트페이지 => 루트페이지를 Home으로 지정*/}
        <Route path='/p1/:item' element={<Page1 />} /> 
        <Route path='/p2' element={<Page2 />} /> 
      </Routes>
    </>
  );
}

export default App;