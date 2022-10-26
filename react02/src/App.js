import { useEffect, useState, useRef } from 'react';
import BoxOfficeList from './project/BoxOfficeList';


export default function App() {

  const[mv, setMv] = useState([]);
  let dRef = useRef();

  const mvLoad = (d) => {
    const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + d;
    // let p = fetch(url)
  
    // console.log(p)
  
    // p.then((response)=> {console.log(response)});
    // p.patch((err)=>{console.log(err)});
  
    //fetch 함수 .then을 사용하여 콜백함수의 늪에 빠지지 않도록 한다.
    fetch(url)
      .then(((response)=> response.json()))  //response.json: json object형태로 받는다. {}가 있으면 프로미스가 아니기 때문에 반드시 return과 함께 쓴다.
      .then((data)=>{                        //response프로미스를 data로 받는다.
        console.log('data =>', data)
        setMv(data.boxOfficeResult.dailyBoxOfficeList.map((m)=>m.movieNm));
      }) //useState변수 활용
      .catch(((err)=>{console.log('err =>', err)}))

  }

  useEffect(() => {
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate()-1);
    console.log(yesterday.getDate());  
    mvLoad('20221025');

  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let dd = dRef.current.value.replaceAll('-','');
    mvLoad(dd);   //
    console.log(dd);
  }

  return (
      <>
      <h1> 비동기 통신 연습 - fetch API</h1>
      <form>
        <input type = "date" ref = {dRef} name = "d" onChange = {handleChange}/>
      </form>
      {mv}
      </>
  );
}
