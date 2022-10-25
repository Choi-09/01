import { Link } from "react-router-dom";
import './Weather.css';



export default function Home() {

    return (
        <>
        <h1>일기 예보</h1>
            <div className="termDiv">
            <button className="term"><Link to = '/p1/term'> 단기 일보</Link></button>
            <button className="term"><Link to = '/p2/term' > 중기 일보</Link></button>
            </div>
        </>

    );

}