import weather from '../DB/weather.json';
import './font.css'

export default function WeatherDay(props){
    const d = props.d;
    let witem = weather.response.body.items.item[0]; //1개짜리 배열

    const items = []; //필요한 아이템 모으기
    const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Am`]; //weather.json에서 반복되는 정보 가져오기
    for(let k of keys) {
        items.push(witem[k]);
    }
    console.log(items);
    
    return(
        <>
        {/* <h2> {probs.d} </h2> */}
        <ul>
            <li className='rntotalam'> 
                <span className='dayafter'> {d}일 후 </span> 
                <span className='rnkey'> 오전 강수량 </span> 
                <span className='rnvalue'> {items[0]} %</span> 
            </li>
            <li className='rntotalpm'> 
                <span className='dayafter'> {d}일 후 </span> 
                <span className='rnkey'> 오후 강수량 </span> 
                <span className='rnvalue'> {items[1]} % </span> 
            </li>
            <li className='wtotalam'> 
                <span className='dayafter'> {d}일 후 </span> 
                <span className='wkey'> 오전 날씨예보</span> 
                <span className='wvalue'> {items[2]} </span>
            </li>
            <li className='wtotalpm'> 
                <span className='dayafter'> {d}일 후 </span> 
                <span className='wkey'> 오후 날씨예보 </span>
                <span className='wvalue'> {items[3]}</span>
            </li>
        </ul>
        </>
    );
}

