import './MyCss.css';

function MyCom() {
    const styleObj = {
        color: 'white',
        backgroundColor: 'green'
    }
    return (
        <>
        <h1> 스타일 변경예제</h1> {/* ↓스타일 속성을 줄 때 html과 약간 다르다. */}
        
        <p style = { {
            color: 'green' , 
            backgroundColor: 'lightgray', 
            padding: '5px',
            fontWeight: 'bolder',
            } }>      
                 {/* ↑ jsx에서 자바 표현식을 쓰기위한 바깥 {}, 오브젝트를 넣기위한 안쪽{} */}
                 {/* 인라인 스타일은 object타입 */}
            리액트에서 스타일 변경 -인라인 형식으로
        </p>
            
        {/* 스타일 object 변수사용 */}
        <p style = {styleObj}>
            리액트에서 스타일 변경 - 인라인 형식으로 변수 사용
        </p>
        
        {/* CSS에서 스타일 변경 : 중복p일때는 css에서 가장 가까운 p에 적용된다*/}
        <p>
        리액트에서 스타일 변경 - css 파일 적용
        </p>

        </>
    );
  }
  
  export default MyCom;