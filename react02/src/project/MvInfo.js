import mv from '../jsonData/mvinfo.json'; //mvinfo에서 데이터 끌어오기
import '../project/MyInfo.css';
//useState hook이 브라우저에 재랜더링해서 출력
import {useState, useEffect} from 'react';
//Hook: useState, useEffect
import MvClock from './MvClock'

function MvInfo() {
    const mvinfo = mv.movieInfoResult.movieInfo; //원하는 object 정보에 접근
    // console.log(mvinfo);
    
    //화면에 출력할 정보를 오브젝트로 생성
    let myinfo = {};
    const key1 = ['movieNm', 'movieCd', 'openDt', 'prdtStatNm', 'showTm',] //배열아닌 키값
    const key2 = ['audits', 'nations', 'directors', 'genres', 'companys',] // 배열 키값

    //key를 한국어로 바꿀 오브젝트 생성
    const keys = {
        'movieNm' : '영화명',
        'movieCd' : '영화코드',
        'openDt' : '개봉일자',
        'prdtStatNm': '제작상태',
        'showTm' : '상영시간',
        'audits' : '관람등급',
        'nations' : '제작국가', 
        'directors' : '감독', 
        'genres' : '장르', 
        'companys' : '배급사',
    }

    //key1에 해당하는 값 추출
    for(let k of key1) {
        myinfo[keys[k]] = mvinfo[k];
    }
    // console.log(myinfo);

    //key2에 해당하는 값 추출: 배열에서 추출
    for(let k of key2) {
        switch(k) {
            case 'audits' :
                myinfo[keys[k]]= mvinfo[k].map((item)=> item.watchGradeNm);
                break;
            case 'nations' :
                myinfo[keys[k]]= mvinfo[k].map((item)=> item.nationNm);
                break;
            case 'directors' :
                myinfo[keys[k]]= mvinfo[k].map((item)=> item.peopleNm);
                break;
            case 'genres' :
                myinfo[keys[k]]= mvinfo[k].map((item)=> item.genreNm);
                break;
            default : //배급사는 prtnm이 3개이기 때문에 필터로 한번 걸러준 다음 배열추출
            myinfo[keys[k]] = mvinfo[k].filter((item)=> item.companyPartNm === '배급사');
            myinfo[keys[k]]= myinfo[keys[k]].map((item)=> item.companyNm); 
            break;
        }
    }

    // console.log(myinfo);
    
    //화면에 출력할 내용을 JSX로 만들기
    let lis = [];

    //key(k)와 값(v) 출력하기
    for(let [k,v] of Object.entries(myinfo)) {
        lis.push(<li key={myinfo.movieCd + k}><span className='k'>{k}<br/></span><span className='v'>{v}</span></li>);
    }                  // 다음 추가하는 movieCd와 충돌이 나지않게 li키 설정

    //count 제어
    let cntUp = 0;
    let cntDown=0;

    // useState 훅 [변수명, 변수를반환해야하는 함수명] 
    let [cntUpSt, setcntUpst] = useState(0); //0:초기값
    let [cntDownSt, setcntDownst] = useState(0); //0:초기값
    let [flag, setFlag] = useState(true) ;
    let [flag2, setFlag2] = useState(true);

    const thumbUp=() => {
        setcntUpst(++cntUpSt);
        console.log('state변수 (좋아요):', cntUpSt);
    }

    const thumbDown=() => {
        setcntDownst(++cntDownSt);
        console.log('state변수(싫어요) :', cntDownSt);
      }
    
    //시계아이콘을 클릭하면 flag변수 변경: 컴포넌트 추가,삭제
    // const handleTimer = () => {
    //     setFlag(!flag) ;
    // }  

    // 스타일 적용해서 타이머 보였다,안보였다 설정
    const handleTimer2 = () => {
        setFlag2(flag2 ==='none' ? 'flex' : 'none'); //flag2가 none이면 display: none
    }

    //useEffect 훅: 랜더링 발생시 계속 수행
    useEffect(()=> {}) ;
      console.log('useEffect : 랜더링 발생시 계속 수행 ') ;

    //useEffect Hook: 컴포넌트 생성시 한 번 발생  "useEffect(()=>{}, [])"
    useEffect(()=> {
    console.log('useEffect : 컴포넌트 생성시 한 번 발생 ') ;
    }, []) ;

    //useEffect Hook: 관련state변수가 변경될 때 실행
    useEffect(()=> {
        console.log('useEffect : 관련state변수가 변경될 때 실행 ') ;
        }, [cntUpSt]) ;

        
    return(
        <>
        <h1>영화 상세</h1>
        <div className='timer'>
            {/* <span onClick={handleTimer}> 🕒 </span> */}
            {/* <span className='clock'>{flag && <MvClock />}</span> */}
            <span onClick={handleTimer2}> 🕒 </span>
            <span className='clock2' style={{'display': flag2}}><MvClock /></span>
        </div>
        <ul>
            {/* <li><span>영화명</span><span>{mvinfo.movieNm}</span></li>
            <li><span>영화코드</span></li>
            <li><span>개봉일자</span></li>
            <li><span>제작상태</span></li>
            <li><span>상영시간</span></li>
            <li><span>관람등급</span></li>
            <li><span>제작국가</span></li>
            <li><span>제작감독</span></li>
            <li><span>배급사</span></li> */}
            {lis}       {/* 화면출력 */}
        </ul>
        <div className='btn'> 
            {/* <span onClick={()=>{
            cnt++;
            console.log(cnt);
            }}>👍</span> */}
            <span onClick={thumbUp} className='like'>👍</span>
            <span>{cntUpSt}</span>
            <span onClick={thumbDown} className='dislike'>👎</span>
            <span>{cntDownSt}</span>

        </div>

        </>
    );

}

export default MvInfo;