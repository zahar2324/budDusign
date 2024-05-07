import { Link } from "react-router-dom";
import "./Header.scss";
import Globe from "../../icons/GlobeIcon";

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth" 
    });
  };
  
  return (
    <div className="Header">
      <Link to="/">
      <div className="HeaderLogo">
        
        <img src={process.env.PUBLIC_URL + "/BuddesignLogo.png"} alt="" />
        <h1 className="HeaderTitle">Buddesign</h1>
       
        
      </div>
      </Link>
      <div className="HeaderRoutes">
        <Link to="/technique">Техніка</Link>
        <Link to="/works">Роботи</Link>
        <Link to="/products">Товари</Link>
        <Link to="/outsourcing">Аутсорсинг</Link>
        <Link to="/houses">Будинки</Link>
        <Link to="/recyclables">Вторсировина</Link>
        <Link to="/gellery">Галерея </Link>
        <Link to="/about" className="dropdown">
      
          Про нас
 
       
  <div className="dropdown-content">
    <div className="dropdown-content-container">
    <Link to="/about">Про нас</Link>
    <Link to="/projects">Проекти</Link>
    </div> 
    
  </div>
</Link>

      
        
        <Link to="#"  onClick={scrollToBottom}>Контакты</Link>
        <button className="HeaderLanguage">
          <Globe></Globe>
          <span>UA</span>
        </button>
      </div>
    </div>
  );
};

export default Header;