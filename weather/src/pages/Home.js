import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const handleClick = (k) => {
        const url = {
            '사과': '/p2?item=사과&item2=과일',
            '바나나' : '/p2?item=바나나&item2=과일',
            '딸기' : '/p2?item=딸기&item2=과일',
            '샤인머스캣' : '/p2?item=샤인머스캣&item2=과일'
        }
        navigate(url[k]);
    }

    return (
        <>
            <h1> HOME </h1>

            <h2> Page1으로 이동</h2>
            <ul>
                <li><Link to='/p1/사과'> 사과 </Link></li>
                <li><Link to='/p1/바나나'> 바나나 </Link></li>
                <li><Link to='/p1/딸기'> 딸기 </Link></li>
                <li><Link to='/p1/샤인머스캣'> 샤인머스캣 </Link></li>
            </ul>

            {/* 권장방법 */}
            <h2> Page2으로 이동</h2> {/* parameter값 불러온다 */}
            <ul>
                <li><Link to='/p2?item=사과&item2=과일'> 사과 </Link></li>
                <li><Link to='/p2?item=바나나&item2=과일'> 바나나 </Link></li>
                <li><Link to='/p2?item=딸기&item2=과일'> 딸기 </Link></li>
                <li><Link to='/p2?item=샤인머스캣&item2=과일'> 샤인머스캣 </Link></li>
            </ul>

            <h2> Page2으로 이동</h2> {/* 이벤트처리. button클릭하면  */}
            <button onClick={()=>handleClick('사과')}>사과</button>  
            <button onClick={()=>handleClick('바나나')}>바나나</button>
            <button onClick={()=>handleClick('딸기')}>딸기</button>
            <button onClick={()=>handleClick('샤인머스캣')}>샤인머스캣</button>
        </>
    );
}