import '../App.css';
import MyHello from './MyHello'

function MyCom03() {
    return (
        <>
        {/* 속성값을 만들 수 있음 
            MyHello 컴포넌트에서 probs 매개변수 (oibject type)에 전달*/}
            <MyHello name = 'PNU' num = '1' ck = '' />
            <MyHello name = 'K-digital' num = '2' ck = '1' />
            <MyHello name = '부산대학교' num = '3' ck = '2' />
        </>
    );
  }
  
  export default MyCom03;