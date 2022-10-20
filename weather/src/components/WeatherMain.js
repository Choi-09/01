import WeatherDay from './WeatherDay';
import './Weather.css';
import {useState} from 'react';

function WeatherMain() {
    let [day, setDay] = useState(3); //day초기값은 3
    const handleClick = (d) => {
        setDay(d);
        console.log(d);
    }
    return (
        <>
        <h1> 날씨예보</h1>
        <form className= 'btn'>
            <button onClick = {(event) => {event.preventDefault(); handleClick(3)}}>3일 후 날씨</button>
            <button onClick = {(event) => {event.preventDefault(); handleClick(4)}}>4일 후 날씨</button>
            <button onClick = {(event) => {event.preventDefault(); handleClick(5)}}>5일 후 날씨</button>
            <button onClick = {(event) => {event.preventDefault(); handleClick(6)}}>6일 후 날씨</button>
        </form>
        <div className='weatherdetail'>
        <WeatherDay d = {day}/> {/* 버튼눌러서 day가 바뀔때마다 {day} 가 재랜더링 */}
        </div>
        </>
    );
  }
  
  export default WeatherMain;