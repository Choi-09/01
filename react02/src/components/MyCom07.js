import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './My07.css'

//useState Hook 사용
import {useState} from 'react';


function MyCom07(probs) {
  // const myMv = probs.item ; //얕은복사
  const myMv = {...probs.item}; //깊은복사

  // map()함수를 이용해서 배열 생성. 배열을 새로운 배열로 만들어준다.
  // const lis = Object.entries(myMv).map((item) => 
    // (
    //   <li key = {item[0]}>
    //     <span className="mvLiK">{item[0]}</span>
    //     <span className="mvLiV">{item[0]}</span>
    //   </li>
    // ) 
  // )
  // console.log(Object.entries(myMv))

  // map 함수 예시
  // let arr = [1,2,3];
  // arr = arr.map((item) => item*2)
  // console.log(arr)
  // )

  const keys = ['rank', 'movieNm']
  const lis = keys.map((k) => 
    <div key={k + myMv['movieCd']} className = {k}> {myMv[k]} </div> 
  ) ;

  //state변수
  let [cnt, setCnt] = useState(0);

  const upCnt=() => {
    setCnt(++cnt);
    console.log(cnt);
  }
  return (
        <div className='mainDiv'>     
            <ul>
              {/* <li>
                <span className='myLiv'> {myMv.rank}</span>
              </li>
              <li>
                <span className='myMv'> {myMv.movieCd}</span>
              </li>
              <li>
                <span className='myMv'> {myMv.movieNm}</span>
              </li>
              <li>
                <span className='myMv'> {myMv.salesAcc}</span>
              </li>
              <li>
                <span className='myMv'> {myMv.audiCnt}</span>
              </li>
              <li>
                <span className='myMv'> {myMv.audiInten}</span>
              </li> */}
              <li className='mvLi'>
                {lis}
              </li>     
            </ul>
            <div className='btn'> 
              {/* <span onClick={()=>{
                cnt++;
                console.log(cnt);
              }}>💗</span> */}
              <span onClick={upCnt}>🧡</span>
              <span>{cnt}</span>
            </div>
        </div>
      );
  }
  
  export default MyCom07;