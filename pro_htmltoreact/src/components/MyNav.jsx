import '../sytles/index.css'
import '../App.css';

function MyNav() {
  return (
    <div>
      <nav>
        <ul className = "nav_logo">
           <li>my logo</li>
        </ul>
        <ul className = "nav_menu">
            <li><a href = "#">HTML</a></li>
            <li><a href = "#">CSS</a></li>
            <li><a href = "#">JavaScript</a></li>
            <li><a href = "#">React</a></li>
        </ul>
        <ul className = "nav_icon">
            <li><a target = "_blank" href= "https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a target = "_blank"href = "https://www.instagram.com"><i className="fa-brands fa-square-instagram"></i></a></li>
        </ul>
    </nav>
    </div>
  );
}

export default MyNav;