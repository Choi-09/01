import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom' ;

function BoxOfficeList() {
  const [mv, setMv] = useState([]) ;
  const dRef = useRef();

  const mvLoad = (d) => {
    const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' + d;

    fetch(url)
      .then((resp) => resp.json() )
      .then((data) => {
        console.log('data=>', data)
        let temp = data.boxOfficeResult.dailyBoxOfficeList ;

        //여기에 박스 만들어서 랭킹 고정시켜놓기
        setMv(temp.map((m)=>
        <ul>
          <div>

            <Link to={'/MvInfo/'+ m.movieCd}>{m.movieNm}</Link>
          </div>
        </ul>));
        <li></li>
      })
      .catch((err) =>{console.log(err)})
  }

  useEffect(() => {
    const today = new Date();
    const yesterday = new Date(today); 
    yesterday.setDate(today.getDate() - 1); 

    console.log(yesterday.getDate())
    mvLoad('20221025')
  }, []);


  const handleChange = (e) => {
    e.preventDefault();
    let dd = dRef.current.value.replaceAll('-','') ;
    mvLoad(dd);
    console.log(dd)
  }
  return (
    <>
      <h1>박스 오피스 순위</h1>
      <form>
        <input type='date' ref={dRef} name='d' onChange={handleChange}/>
      </form>
      {mv}
    </>
  );
}

export default BoxOfficeList;