import logo from './logo.svg';
import './App.css';
import MyTick from './components/MyTick';


//모든 컴포넌트는 해당 문법으로 생성.
function App() {
  console.log("App 컴포넌트")
  return (
    // return에는 반드시 1태그묶음이 있다.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {/* jsx문법과 기존 태그의 차이점.
            1. 마지막에 /
            2. class와 className
            3. src 다음{}에 javascript 표현식을 쓸 수 있다. */}
      </header>
      <MyTick />
    </div>
  );
}

export default App;
