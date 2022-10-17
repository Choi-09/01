import mv from'../jsonData/mvinfo.json';

export default function MyObject() {
    //object 순회: 키값 가져오기
    // for(let k in mv) {
    //     console.log('키 : ', k);
    //     console.log('값 : ', mv[k]);

    //     // 값이 오브젝트임으로 반복 순회(값 -> 자식 키) 
    //     
    //     for(let chk in mv[k]) { 
    //         console.log('자식 키 : ', chk);
    //         console.log('자식 값 : ', mv[k][chk]); 
    //     }
    // }

    // 내가 원하는 정보는 movieInfo라는 자식키 안에 들어있기 때문에 찾아간다.
    const myInfo = mv.movieInfoResult.movieInfo; 
    // console.log(myInfo); 

    //object 순회
    // for(let k in myInfo) {
    //     console.log("키 :", k);
    // }

    //object 키와 값의 배열의 배열로 반환
    // console.log(Object.entries(myInfo));

    //배열순회
    // for(let item of Object.entries(myInfo)) {
    //     console.log(item);
    // }

    // item이 [키, 값]으로 생긴 배열이기 때문에 각각 [k(키), v(값)]로 나누어준다.
    // in은 사용x : 값만 불러오기때문에
    // for(let [k, v] of Object.entries(myInfo)) {
    //     console.log(k, v);
    // }

    // 새로운 배열 생성
    // const com = myInfo.companys;

    // // 배열에 map 함수를 쓴다. map(() => {}): 배열의 항목을 가지고 와서 새로운 배열을 생성
    // const mcom = com.map(
    //     (item) => item.companyNm + '(' + item.companyPartNm + ')'
    // )
    // console.log(mcom);

    // // filter(() => {}) :  배열 안에서 내가 필요한 부분(조건에맞는 부분)만 추출하여 새로운 배열 생성
    // const fcom = com.filter(
    //     (item) => item.companyPartNm === '배급사'
    // )
    // console.log(fcom);

    //배우 이름과 배역명
    const actorname = myInfo.actors;

    const pname = actorname.map(
        (name) => 
        <li key = {name.cast.replace(' ', '') + name.peopleNm } > {name.peopleNm} : {name.cast} </li>
    )       //replace( ' ', '' ): 공백이 있으면 붙인다 
    
    console.log(pname);

    return (
        <>
        <h1>
            오브젝트 연습
        </h1>
        <ul>
            {pname}
        </ul>
        </>
    )
}