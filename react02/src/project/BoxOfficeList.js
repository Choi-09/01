import boxofficelist from '../jsonData/boxofficelist.json';
import BoxOffice from './BoxOffice';
import { useState, useRef, useEffect } from 'react';

export default function BoxOfficeList() {

    let mv = boxofficelist.boxOfficeResult.dailyBoxOfficeList ;
    // const mvs = mv.map((m) => < BoxOffice key = {m.movieCd} item={m} /> )

    const options = mv.map((m) => <option key =  {'op' + m.movieCd} > {m.movieNm}</option>)
    // state변수
    let[mvs, setMvs] = useState([]);


    //ref변수 선언 :
    const txtRef = useRef() ;

    //useEffect: 함수선언. []의미: 맨처음 실행될때만 실행
    useEffect(()=> {
        txtRef.current.focus();
        setMvs(mv.map((m) => < BoxOffice key = {m.movieCd} item={m} />)); 
        /* map의 오리지널 버전
             for(let i = 0; i<mv.length; i++){
                tmep.push(mv[i]) ; 
            }   
        */

    }, []);

    useEffect(() => {
        console.log('생성=>', mvs);
    }, [mvs]);

    //확인 버튼 처리
    const handleClick = (event) => {
        event.preventDefault() ;
        // let temp = [];
    /* 
        // 반복문을 사용하는 경우(map을 사용안할경우)

        for(let i = 0; i < mv.length; i++) {
            if (mv[i].movieNm.includes(txtRef.current.value)){  : includes 문자열에 해당글자가 있는지 찾아주는 메서드
                temp.push(< BoxOffice key = {m.movieCd} item={m} />)
            }     
         setMvs(temp);   //useEffect에서 콘솔출력
        }
      */
        //filter,map함수 이용
        let temp = mv.filter((m) => m.movieNm.includes(txtRef.current.value));
        setMvs(temp.map((m) => < BoxOffice key = {m.movieCd} item={m} />));
    };
  
    return ( 
        <>
        <h1>박스오피스</h1>
        <form className='formDiv' onSubmit={handleClick}>  {/* onSubmit: 엔터, 버튼 모두 반응. onClick은 버튼클릭에반 반응 */}
        {/* ↓ select 폼 적용해보기
            <select className= "dropBox" ref={selectRef} placeholder='영화를선택하세요'>{options}</select> */}
            <input type = 'txt' name='movietitle' ref={txtRef} placeholder='영화제목을 입력하세요'></input>
            <button type = 'submit'> 확인 </button> {/*<button type = 'button' onClick={handleClick}>확인 </button>*/}
            <button type = 'cancle'> 취소 </button>
        </form>
        {/* <div>
            {Selected}
        </div> */}
        {mvs}
        </>
    )
}

//object, 배열 javascript 공부하기