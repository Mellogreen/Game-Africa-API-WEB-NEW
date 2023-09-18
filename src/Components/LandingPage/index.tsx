import './style.scss'
import logo from "../../img/g8.png"
import logo1 from "../../img/Rectangle 14.png"
import logo3 from "../../img/Rectangle 15.png"
import logo2 from "../../img/Rectangle 18.png"
import logo4 from "../../img/Rectangle 37.png"
import logo5 from "../../img/Rectangle 36.png"
import video from "../../img/Olamide-Rock-Video-(TrendyBeatz.com).mp4"
import logo6 from "../../img/Rectangle 35.png"


const LandingPage = () => {
    return ( 
        <div className="entire-landing-page">
            <section className="section-one">
                <div className="contianer">
                    <div className="enjoy">
                        <div className="word">
                            <h1>Enjoy Your Favourite <br />indigenous African Games </h1> 
                            <p>You can enjoy your favourite indigenous games on your device <br />
                                and rekindle your love for them.They are our games and they are <br />
                                our pride.Simply click to download one for your device.
                            </p>
                            <div className="svg-img d-flex">
                                <img src="https://res.cloudinary.com/dlpmboa2r/image/upload/v1689867226/download-on-the-app-store-apple-logo-svgrepo-com_uvozfp.svg" alt="" />
                                <img src="https://res.cloudinary.com/dlpmboa2r/image/upload/v1689867672/google-play-download-android-app-logo-svgrepo-com_1_vcmvp7.svg" alt="" />
                            </div>
                        </div>
                        
                        <div className=''>
                            <img src={logo} alt="/" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-two">
                    <div className="container">
                        <div className="word-two pt-4 ">
                            <h1>Our Games</h1>
                            <p>We have the following games  <br />  available on our mobiles</p>
                        </div>
                        <div className="card-container row">

                            <div className="card-container-one col-sm-12 col-md-4">
                                <div className="fort" style={{width: "24rem"}}>
                                    <img src={logo1} className="card-img-top"  alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Traditional Dice</h5>
                                        <p className="card-text">Enjoy a game of traditional dice and 
                                        get your mind occupied. You can play alone or with your friends using the 
                                        internet
                                        </p>
                                        <a href="#" className="btn btn-custom">Download</a>
                                    </div>
                                </div>

                                <div className="fort" style={{width: "24rem"}}>
                                    <img src={logo2} className="card-img-top"  alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Traditional whot</h5>
                                        <p className="card-text">Enjoy a game of traditional whot and 
                                        get your mind occupied. You can play alone or with your friends using the 
                                        internet
                                        </p>
                                        <a href="#" className="btn btn-custom">Download</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-container-two col-sm-12 col-md-4">
                                <div className="fort" style={{width: "24rem"}}>
                                    <img src={logo3} className="card-img-top"  alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Traditional whot</h5>
                                        <p className="card-text">Enjoy a game of traditional whot and 
                                        get your mind occupied. You can play alone or with your friends using the 
                                        internet
                                        </p>
                                        <a href="#" className="btn btn-custom">Download</a>
                                    </div>
                                </div>
                                <div className="fort" style={{width: "24rem"}}>
                                    <img src={logo4} className="card-img-top"  alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Traditional ludo</h5>
                                        <p className="card-text">Enjoy a game of traditional ludo and 
                                        get your mind occupied. You can play alone or with your friends using the 
                                        internet
                                        </p>
                                        <a href="#" className="btn btn-custom">Download</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-container-three col-sm-12 col-md-4">
                                <div className="fort" style={{width: "24rem"}}>
                                    <img src={logo5} className="card-img-top"  alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Traditional Draughts</h5>
                                        <p className="card-text">Enjoy a game of traditional draughts and 
                                        get your mind occupied. You can play alone or with your friends using the 
                                        internet
                                        </p>
                                        <a href="#" className="btn btn-custom">Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="section-three">
                    <div className="container">
                        <div className="word-three">
                            <h2> Games tutorials</h2>
                            <p>Let us show you same best ways to <br /> enjoy the games we have</p>
                        </div> 
            
                        <div className="card-container">
                            <div className="card">
                                <div className="card-container-six">
                                    <div className="fort-video" style={{width:"50em"}}>
                                        <video className='mt-4' width="740" controls autoPlay>
                                           <source src="https://res.cloudinary.com/dlpmboa2r/video/upload/v1689885749/Olamide-Rock-Video-_TrendyBeatz.com_zugvx9.mp4"/>
                                        </video>

                                        <div className="card-body">
                                            <h4 className="card-title">How to start a game</h4>
                                            <p className="card-text">We will lead you through the basic <br /> knowledge you need to start the game.
                                            </p>
                                            <div className="info">
                                                <a href="#" className="">Previous</a>
                                                <a href="#" className="">next</a>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="extra">
                                <div className="card">
                                    <div className="card my-0">
                                        <a className=" icon-link-hover"  href="#">
                                            <h5 className="card-title">How to start a game</h5>
                                            <p className="card-text">A brief showcase of how to enjoy the <br /> game with your friends.</p>
                                        </a>
                                    </div> 

                                    <div className="card my-0">
                                        <a className="icon-link-hover"  href="#">
                                            <h5 className="card-title">How to start a game</h5>
                                            <p className="card-text">A brief showcase of how to enjoy the <br /> game with your friends.</p>
                                        </a>
                                    </div>

                                    <div className="card my-0">
                                        <a className=" icon-link-hover"  href="#">
                                            <h5 className="card-title">How to start a game</h5>
                                            <p className="card-text">A brief showcase of how to enjoy the <br /> game with your friends.</p>
                                        </a>
                                    </div>

                                    <div className="card my-0">
                                        <a className=" icon-link-hover"  href="#">
                                            <h5 className="card-title">How to start a game</h5>
                                            <p className="card-text">A brief showcase of how to enjoy the <br /> game with your friends.</p>
                                        </a>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>  
            </section>
            <section className="section-four">
                <div className="section-four-wrap">
                    <div className="container">
                        <div className="word-four mb-4">
                            <h2> Frequently asked yestions</h2>
                            <p>Incase you have some questions for us, kindly go through <br />
                               this section first before you contact our customer support
                            </p>
                        </div>
                    </div>   
                    <div className="disp">
                            <img src={logo6} alt="/" />

                            <div className='ac-disgn mx-4'>

                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                               Will i be able to play the game without internet?
                                            </button>
                                        </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse"        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                           Will i be able to play the game without internet?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                           Will i be able to play the game without internet?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Will i be able to play the game without internet?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          Will i be able to play the game without internet?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"      data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Will i be able to play the game without internet?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                   </div>
                               </div>
                              </div>
                            </div>
                         </div>
                      <div> 
                    </div>
                </div>
            </section>
            <section className="section-five">
                <div className="section-five-wrap">
                    <div className="container">
                        <div className="word-five">
                            <h2>
                                For more enquiries, <br /> you can contact us <br />here or send a <br />message to us:
                            </h2>
                            <p>Email: Support@play2win.ng</p>
                            <p>instagram: @play2win_ng</p>
                        </div>
                        <div className="info-two">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type name"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email / Phone Number</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type email/Phone number"/>
                                <div id="passwordHelpBlock" className="form-text">
                                We'll never share your email with anyone else
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Messages</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type messages..." rows="5"></textarea>
                            </div>
                            <div className='info-three'>
                                <a href="#" className="btn btn-custom my-2">Submit</a>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
            <footer>
                <div className="container">
                    <h6>Powered by Cloud23 Technologies © 2020</h6>
                </div>
            </footer>
        </div>
     );
}
 
export default LandingPage;