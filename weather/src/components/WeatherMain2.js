import weather2 from '../DB/weather2.json';
import item from '../DB/item.json';
import './Weather.css';
import {Link} from "react-router-dom";


export default function WeatherMain2() {

    let w2item = weather2.response.body.items.item ;
    const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
    const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };

    const items2 = Object.entries(w2item).map((m)=> //map함수안에들어가는 m은 바로 리턴이 되어야해서 if조건문 안되고, 삼항연산자로 조건설정
        (m[1].category === "PTY" ? 
        (<div key = {m[1].category} className = 'total'> 
            <span className='title'>{item[m[1].category][0]} </span>
            <span className='detailvalue'> {pty[m[1].obsrValue]} </span>
        </div>) 
        : (m[1].category === "SKY" ?
        <div key = {m[1].category} className = 'total'>
            <span className='title'>{item[m[1].category][0]} </span>
            <span className='detailvalue'> {sky[m[1].obsrValue]}</span>
         </div>
        : <div key = {m[1].category} className = 'total'> 
            <span className='title'>{item[m[1].category][0]} </span>
            <span className='detailvalue'>{m[1].obsrValue} {item[m[1].category][1]}</span>
        </div>
        ) )
    );

    //↓ 내가 적은 코드. PTY만 출력되는 오류
    // const key = [`category`];
    // for(let k of key) {
    //     items2.push(w2item[k]);
    // }
    // console.log(items2);



    return(
        <>
        <h1>날 씨 예 보 - 단기정보</h1>
        <Link to = '/' className = 'home'> Home </Link>
        <div className='shortterminfo'>
            {items2}
        </div>
    
        </>
    );
}