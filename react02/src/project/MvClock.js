
import {useEffect, useState} from "react";
export default function Mvclock() {
    let [t, setT] = useState(null) ; 

    useEffect(()=>{
        const timer = setInterval(()=>{   //1초에 1번씩 인터벌이 되도록하는 setInterval
            setT(new Date().toLocaleTimeString());
        }, 1000); 

        return () => {clearInterval(timer)};
            
    }, []);


    return(
        <span>{t}</span>
    ) ;
}