import WeatherDay from './WeatherDay';
import './Weather.css';
import './font.css'
import {useState} from 'react';
import {Link} from "react-router-dom";

function WeatherMain() {
    let [day, setDay] = useState(3); //day초기값은 3
    const handleClick = (d) => {
        setDay(d);
        console.log(d);
    }
    return (
        <>
        <h1> 날  씨  예 보 - 중기정보</h1>

        <form className= 'formDiv'>
            <div className='btns'>
            <button onClick = {(event) => {event.preventDefault(); handleClick(3)}}>3일 후 날씨</button>
            <button onClick = {(event) => {event.preventDefault(); handleClick(4)}}>4일 후 날씨</button>
            <button onClick = {(event) => {event.preventDefault(); handleClick(5)}}>5일 후 날씨</button>
            <button onClick = {(event) => {event.preventDefault(); handleClick(6)}}>6일 후 날씨</button>
            </div>
        </form>
        <Link to = '/' className = 'home'> Home </Link>
        <div className='weatherdetail'>
        <WeatherDay d = {day}/> {/* 버튼눌러서 day가 바뀔때마다 {day} 가 재랜더링 */}
        </div>
        </>
    );
  }
  
  export default WeatherMain;