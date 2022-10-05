# React
+ 리액트 생성: 복잡해! Node.js 설치로 리액트 구축환경 만들어 사용 
  +  1. node.js 다운
  +  2. vs code 터미널에서 react 저장 폴더 진입 (cd 폴더명)
  +  3. npx create-react-app + 프로젝트명(소문자)
  +  4. npx로 생성한 프로젝트로 들어가서 (cd 프로젝트명)
  +  5. npm start

+ 리액트 작업: src폴더에서 주로 작업. 작업 구조를 먼저 파악하자 / 리액트는 사용자 정의 태그(컴포넌트)를 만드는 도구.
  + 1. public - index.html 에서 필요없는것 정리(그냥둬도 무관)
  + 2. src - index.js 정리(그냥둬도 무관)
  + 3. index.js가 App.js 를 부른다.
  + 4. App.js 수정
  + 5. App.css 수정
  + 6. components 파일 생성
  + 7. components - MyTick(이름자유).jsx(js도 괜찮다.) js파일 생성
  + 8. MyTick파일을 App.js에 갖다 붙인다. (App.js -> import MyTick from './components/MyTick'; )
  + 9. 필수 구문 Function MyTick( return();)
 {} 
+ 특징
  + 사용자 정의태그를 만든다는것은: 아무렇게나 만드는게 아니라 리턴을 기존에 있는 HTML 태그를 묶음으로 만드는 것.
  + 컴포넌트는 무조건 대문자로 시작
  + 1컴포넌트 -> 1 function -> 1리턴-> 1 태그묶음
  
  
+ 참고사이트
  + 리액트: https://ko.reactjs.org/
  + 파비콘 만들기:  
