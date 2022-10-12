import style from './App.module.css';
import MyCom from './components/MyCom';

//스타일은 가까운 곳에 적용된다. (js파일명).module.css 파일을 생성하면 원하는 컴포넌트에만 스타일 적용 가능


function App() {
  return (
    <>
      <MyCom />
    </>
  );
}

export default App;
