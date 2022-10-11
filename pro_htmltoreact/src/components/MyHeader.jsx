import '../sytles/index.css'
import '../App.css';

function MyHeader() {
    return (  
        <header>
          <section>
            <div className = "header_left"> 프론트엔드<br/>FrontEnd
            </div>
            <div className = "header_right">
                웹에서 사용자에게 시각적으로 보여지는 부분을 의미한다. 프론트엔드쪽에서는 주로 HTML, CSS, 자바스크립트가 쓰이며, 요즘은 페이스북에서 개발한 자바스크립트에서 파생된 싱글 페이지 애플리케이션 형태의 리액트가 많이 사용된다.
            </div>
          </section>
      </header>
  
    );
  }
  
  export default MyHeader;