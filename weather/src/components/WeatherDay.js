import weather from '../DB/weather.json';
import { useState } from 'react';

export default function WeatherDay(probs){
    const d = probs.d;
    let witem = weather.response.body.items.item[0]; //0부터 시작

    const items = []; //필요한 아이템 모으기
    const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Am`]; //weather.json에서 반복되는 정보 가져오기
    for(let k of keys) {
        items.push(witem[k]);
    }
   
    
    return(
        <>
        {/* <h2> {probs.d} </h2> */}
        <ul>
            <li> {d}일 후 오전 강수량 : {}</li>
            <li> {d}일 후 오전 강수량 : {}</li>
            <li> {d}일 후 오전 날씨예보 : {}</li>
            <li> {d}일 후 오후 날씨예보 : {}</li>
        </ul>
        </>
    );
}

