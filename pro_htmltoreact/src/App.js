import './sytles/index.css'
import './App.css';
import MyNav from './components/MyNav';
import MyHeader from './components/MyHeader';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';
function App() {
  return (
      <>
        <MyNav />
        <MyHeader />
        <MyMain />
        <MyFooter />
      </>
  );
}
export default App;
