import { Fragment } from 'react';
import './My.css';
import MyTime from './MyTime';


function MyTick() {
  return (
    <>
    <h2 className='myh2'>현재시간 
    </h2>    
    <MyTime />
    </>

  );
  
}

export default MyTick;