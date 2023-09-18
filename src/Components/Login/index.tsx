import "./style.scss"
import logo from "../../img/loginlogo.png"
import { Link } from "react-router-dom";

const LoginPage = () => {

    return ( 
    <div className="login-entire-app">
        <div className="container-login">
          <div className="group"> 
                <div className="logo">
                    <img className="game" src={logo} alt="" />
                </div>
                <div className="mt-4 mb-4"> 
                    <h3>Login And Have Fun</h3>
                </div>
                <div className="mb-3">
                    <h5 className="form-lable ms">Username</h5>
                    <input className="form-control" type="text" placeholder="Type username"/>
                </div>
                <div>
                    <h5 className="form-lable ms">Password</h5>
                    <input className="form-control" type="text" placeholder="At least 8 characters"/>
                </div>
                <div className="forget">   
                    <h6 className="mt-2"><span><input className="check-color" type="checkbox"/></span>Remember me</h6>
                    <h6 className=" grin mt-2 mb-4">Forget password?</h6>
                </div>
                <div className="link">
                    <Link type="button" className="btn btn-custom-two" to = {"/"}>Login</Link>
                </div>
                <div className="link-two mt-2">
                   <h6 className="lastline">Don't have an account? <span><Link to = {"/signup"}> Signup</Link></span></h6>
                </div>
           </div> 
        </div>   
    </div>

);
}
 
export default LoginPage;

