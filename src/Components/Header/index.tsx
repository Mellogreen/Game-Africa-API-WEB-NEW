import "./style.scss"
import logo from "../../img/HeaLogo.png"
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <div className="entire-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                
                        <img className="py-2" src={logo} alt="logo" />

                      <div className="nav-wrapper">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to ={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ={"/"}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ={"/"}> How to play</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ={"/"}> FAQ </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ={"/"}> Contact </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-custom py-2 px-4" to ={"/login"}> Login </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
       </div>
        
      );
}
 
export default Header;