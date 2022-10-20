import './BoxOffice.css'

//useState Hook 사용
import {useState} from 'react';

function BoxOffice(probs) {

  const myMv = {...probs.item}; //깊은복사
  const keys = ['rank', 'movieNm']
  const lis = keys.map((k) => 
    <div key={k + myMv['movieCd']} className = {k}> {myMv[k]} </div> 
  ) ;

  //state변수
  let [cnt, setCnt] = useState(0);
  let [dspFlag, setDspFlag] = useState('none'); //disFlag에 useState 훅 설정

  const upCnt=() => {
    setCnt(++cnt);
    console.log(cnt);
  }

  const handleShow = (event) => {
    event.stopPropagation();
    setDspFlag('flex');
  }

  const handleShowOut = (event) =>{
    event.stopPropagation();
    setDspFlag('none');
  }
  
  return (
      <>
      <div className='mainDiv'>     
        <ul>
          <li className='mvLi' onMouseEnter={handleShow} onMouseLeave={handleShowOut}>
            {lis}
          </li>     
        </ul>
      <div className='btn'> 
        <span onClick={upCnt}>🧡</span>
        <span>{cnt}</span>
      </div>
      </div>
      <div className='mainDiv2' style={{'display' : dspFlag}}>
        <ul>
          <li>영화명 : {myMv.movieNm}</li>
          <li>매출액 : {myMv.salesAmt}</li>
          <li>관객수 : {myMv.audiCnt}</li>
          <li>증감율 : {myMv.salesInten}</li>
        </ul>
      </div>

      </>
    );
  }
  
  export default BoxOffice;