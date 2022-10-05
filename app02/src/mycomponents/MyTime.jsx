import './My.css';


function MyTime() {
  return (
    <div className='ltime'>
    {new Date().toLocaleTimeString()}
    </div>
  );
  
}


export default MyTime;