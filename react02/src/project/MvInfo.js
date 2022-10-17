import mv from '../jsonData/mvinfo.json'    //mvinfo에서 데이터 끌어오기
import '../project/MyInfo.css'

function MvInfo() {
    const mvinfo = mv.movieInfoResult.movieInfo; //원하는 object 정보에 접근
    console.log(mvinfo);
    
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
    console.log(myinfo);

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

    console.log(myinfo);
    
    //화면에 출력할 내용을 JSX로 만들기
    let lis = [];

    //key(k)와 값(v) 출력하기
    for(let [k,v] of Object.entries(myinfo)) {
        lis.push(<li key={myinfo.movieCd + k}><span className='ktitle'>{k}<br/></span><span className='kvalue'>{v}</span></li>);
    }                  // 다음 추가하는 movieCd와 충돌이 나지않게 li키 설정

    return(
        <>
        <h1>영화 상세</h1>
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
        </>
    );
}

export default MvInfo;