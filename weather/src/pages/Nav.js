//링크걸때 a 쓰지만 라우터에서는 link태그 쓴다
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
        <ul>
            <li><Link to = '/'> 홈으로</Link> </li> {/* a태그 사용불가. Link 태그 사용 */}
            <li><Link to = '/p1/t'> Page1 </Link> </li> 
                {/* /: =>문법이므로 외워야함. App.js에서 /p1/:item으로 지정해주었기 때문에 Nav에서도 p1뒤에 내용을 붙여줘야함. 슬래쉬+임의내용*/}
            <li><Link to = '/p2'> Page2 </Link> </li>
        </ul>
        </>
    );
}