import logo from '../../img/logo.svg'
import './index.css';


function Logo(){
    return(
     <div className="logo">
        <img src={logo} alt='logo' className="logo-img"></img>
        <strong><p>Books</p></strong>
     </div>
    
    );
}

export default Logo;