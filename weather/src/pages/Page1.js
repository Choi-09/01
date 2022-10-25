import { useParams } from "react-router-dom";
export default function Page1() {
    const param = useParams().item ;
    return (
        <>
            <h1> Page1 </h1>
            <h2>{param === 't'?'전달자료 없음' : param} </h2>
        </>
    );
}