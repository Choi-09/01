import './MyCss.css';


export default function MyHello(probs) { //export default인 경우 function 앞에 넣을 수 있음
    // 함수의 내용을 작성하는 부분
    console.log(probs.name);
    // console.log(probs['name']);  // 반드시 name에 문자열이 와야한다.

  return (
    <div className = 'divHello'>
        <h1>Hello! React</h1> 
        {/* 중괄호를 사용하면 js 함수를 사용할 수 있다. */}
        <h2>
            <span className = 'spanHello'> {probs.name}  </span>
            <span className = 'numHello'> {probs.num % 2 == 1 ? '홀수' : '짝수'}  </span>
            <span className = 'numHello'> {probs.ck || '🙄'}  </span> 
                                          {/* ck값 혹은 '🙄' 둘중 하나 출력 */}
            <span className = 'numHello'> {probs.ck ? '😘' : '🤔'}  </span>
                                          {/* ck값이 true인 경우 😘, false 인 경우 🤔 */}
        </h2>
    </div>

  );
}

