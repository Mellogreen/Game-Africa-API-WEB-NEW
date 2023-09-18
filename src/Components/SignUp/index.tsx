import "./style.scss"
import logo from '../../img/loginlogo.png'
import { Link } from "react-router-dom";

const SignUp = () => {
    return ( 
        <div className="entire-SignUp">
            <div className="container-signup">
               <div className="signup-group"> 
                    <div className="logo">
                        <img className="game-logo" src={logo} alt="" />
                    </div>
                    <div className="mt-2"> 
                        <h3>Sign Up And Have Fun</h3>
                    </div>
                    <div className="mb-3">
                        <h5 className="form-lable-new ms">Username</h5>
                        <input className="form-control" type="text" placeholder="Type username"/>
                    </div>
                    <div>
                        <h5 className="form-lable-new ms">Password</h5>
                        <input className="form-control" type="text" placeholder="At least 8 characters"/>
                    </div>
                    <div>
                        <h5 className="form-lable-new mt-2">Email</h5>
                        <input className="form-control" type="text" placeholder="Type email address"/>
                    </div>
                    <div className="terms mb-3 mt-3">   
                       <h6>By clicking Sign Up, you are agreeing to the Terms of use <br/>
                           including the arbitration clause and you are acknowledging the <br/>
                           Privacy Policy 
                       </h6>
                    </div>
                    <div className="link">
                        <Link type="button" className="btn btn-custom-two" to = {"/home"}>Sign Up</Link>
                    </div>
                    <div className="link-two mt-2">
                    <h6 className="lastline">Already have an account? <span><Link to = {"/login"}> Login</Link></span></h6>
                    </div>
           </div> 
        </div>   
    </div>
    );
}
 
export default SignUp;