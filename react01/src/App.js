import './App.css';


function App() {
  const name = ""; // 변수 선언(const: 변수 못바꿈, let: 변수 바꿀수있음)
                   // 

  return (
    <div className='div1'> 
      {/* <h1>Hello {name ? name : '아무개님'} </h1>    */}
      <h1>Hello {name || '아무개님'} </h1> {/* or연산 순서 유의 */}
      <h2>React!</h2>
    </div>
  );
}

export default App;
