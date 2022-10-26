import { useEffect, useState } from 'react';
import BoxOfficeList from './project/BoxOfficeList';

function App() {
  const [n1, setN1] = useState(0);  //N1이 useState 훅을 받고 초기값이 0
  const [n2, setN2] = useState(0); 
  const [n3, setN3] = useState(0); 
  const [n4, setN4] = useState(0); 

  const disp = () => {
    setN1(n1 + 1);
    setTimeout(()=>{setN2(n2+1)}, 2000);  //비동기처리: 해당 요소가 해당 조건으로 실행될 동안 다른 요소들은 작업계속한다. 멈추지않아
    setN3(n3 + 1);
    setN4(n4 + 1);
  }

  const handleClick = (event) => {    //button에 onclick시 카운트 증가하도록 설정
    event.preventDefault();           //처음으로 돌아가지 않도록 막는다
    disp();
  }
  useEffect(() => {
    disp();
  }, []); // []이 들어가면 최초에 한번 실행될때만 호출
  return (
    <>
      <h1>비동기 통신 연습</h1>
      <ul>
        <li>{n1}</li>
        <li>{n2}</li>
        <li>{n3}</li>
        <li>{n4}</li>
      </ul>
      <form>
        <button onClick={handleClick}> 증가</button>
      </form>
      {/* <BoxOfficeList /> */}
    </>
  );
}

export default App;
