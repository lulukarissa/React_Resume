import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
     <div>
      <div class="container-fluid p-0">
      {/*====================================================
                          ABOUT
      ======================================================*/}
        <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div class="my-auto" >
                {/* <img src="img/logo-s.png" class="img-fluid mb-3" alt=""/> */}
                <h1 class="mb-0" style={{marginTop:'150px'}}>Lulu
                  <span class="text-primary"> Karissa</span>
                </h1>
                <div class="subheading mb-5">Excellent intuitive and analytical thinking. Self-motivated and enthusiastic to learn new skills.
                </div>
                <p class="mb-5" style={{maxWidth: '500px'}} > I am a 22 year old female, have an excellent health, high motivation, good computer skill, creative, high loyalty and integrity. I am a fast learner and ready to work hard. Able to work in individual and in team.</p>
                <ul class="list-inline list-social-icons mb-0">
                    <li class="list-inline-item">
                        <a href="mailto:lulukarissa@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                    </li>
                    {/* <li class="list-inline-item">
                        <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                    </li> */}
                    <li class="list-inline-item">
                        <a href="https://www.linkedin.com/in/lulu-karissa-86b258154/" target="_blank" rel="noopener noreferrer">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/lulukarissa" target="_blank" rel="noopener noreferrer">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                    </li>
                </ul>
            </div>
        </section>

      
      {/*====================================================
                            EDUCATION
      ======================================================*/}       
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
            <div class="row my-auto">
                <div class="col-12">
                  <h2 class="  text-center">Education and Training</h2>
                  <div class="mb-5 heading-border"></div>
                
                <div class="main-award" id="award-box">
                  <div class="award">
                      <div class="award-icon"></div>
                      <div class="award-content">
                          <span class="date">October 2018 - March 2019</span>
                          <h5 class="title">Purwadhika Startup and Coding School</h5>
                          <p class="description">
                              Training program: web and mobile development
                          </p>
                      </div>
                    </div>
                    <div class="award">
                        <div class="award-icon"></div>
                        <div class="award-content">
                            <span class="date">July 2013 - June 2017</span>
                            <h5 class="title">Universitas Riau</h5>
                            <p class="description">
                            Bachelor of Architectural Engineering, Universitas Riau with GPA: 3.42 out of 4.00
                            </p>
                        </div>
                    </div>
                    {/* <div class="award">
                        <div class="award-icon"></div>
                        <div class="award-content">
                            <span class="date">June 2010 - May 2013</span>
                            <h5 class="title">SMAN 8 Pekanbaru</h5>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                            </p>
                        </div>
                    </div> */}
                    </div> 
                </div>
            </div>
        </section> 

      {/*====================================================
                          EXPERIENCE
      ======================================================*/}      
        <section class="resume-section p-3 p-lg-5 " id="experience">
            <div class="row my-auto">
                <div class="col-12">
                  <h2 class="  text-center">Experience</h2>
                  <div class="mb-5 heading-border"></div>
                </div>
                {/* <div class="resume-item col-md-6 col-sm-12 " > 
                  <div class="card mx-0 p-4 mb-5" style={{borderColor: '#17a2b8', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
                    <div class=" resume-content mr-auto">
                        <h4 class="mb-3"><i class="fa fa-globe mr-3 text-info"></i> Senior Web Developer</h4>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">March 2019 - Present</span>
                    </div>
                  </div>  
                </div> */}
                <div class="resume-item col-md-12 col-sm-12">
                  <div class="card mx-0 p-4 mb-5" style={{borderColor: '#ffc107', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
                    <div class="resume-content mr-auto">
                        <h4 class="mb-3"><i class="fa fa-laptop mr-3 text-warning"></i> PT Yodya Karya (PERSERO) </h4>
                        <p>
                        Internship in PT Yodya Karya (PERSERO) Pekanbaru. Job description: Assisting in company data for tender process, drawing sketch of 2-floor house remodeling plans, learning and observing the implementation of the construction management from existing project
                        </p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">January 2016 - March 2016</span>
                    </div>
                  </div>  
                </div>
                {/* <div class="resume-item col-md-6 col-sm-12">
                  <div class="card mx-0 p-4 mb-5" style={{borderColor: '#28a745', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
                    <div class="resume-content mr-auto">
                        <h4 class="mb-3"><i class="fa fa-camera mr-3 text-success"></i> Junior Web Designer</h4>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">July 2017 - December 2018</span>
                    </div>
                  </div>  
                </div>
                <div class="resume-item col-md-6 col-sm-12">
                  <div class="card mx-0 p-4 mb-5" style={{borderColor: '#2196f3', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
                    <div class="resume-content mr-auto">
                        <h4 class="mb-3"><i class="fa fa-area-chart mr-3 text-primary"></i> Web Design Intern</h4>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">September 2018 - June 2019</span>
                    </div>
                  </div>  
                </div> */}
            </div>
        </section>

      {/*====================================================
                          PORTFOLIO
      ======================================================*/}      
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio"> 
            <div class="row my-auto">
                <div class="col-12">
                  <h2 class="  text-center">Portfolio</h2>
                  <div class="mb-5 heading-border"></div>
                </div>
                <div class="col-md-12">
                  <div class="port-head-cont">
                    <button class="btn btn-general btn-green filter-b" data-filter="all">All</button>
                    <button class="btn btn-general btn-green filter-b" data-filter="fundamental">Fundamental</button>
                    <button class="btn btn-general btn-green filter-b" data-filter="frontend">Front End</button>
                    <button class="btn btn-general btn-green filter-b" data-filter="backend">Back End</button>
                    <button class="btn btn-general btn-green filter-b" data-filter="fullstack">Full Stack</button>
                    <button class="btn btn-general btn-green filter-b" data-filter="mobile">Mobile</button> 
                  </div>
                </div>
            </div>
            <div class="row my-auto">
                <div class="col-sm-4 portfolio-item filter fullstack">
                    <a class="portfolio-link" href="#portfolioModal12" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-12.jpg" alt=""/>
                    </a>
                </div>   
                <div class="col-sm-4 portfolio-item filter frontend">
                    <a class="portfolio-link" href="#portfolioModal4" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-4.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item filter frontend">
                    <a class="portfolio-link" href="#portfolioModal5" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-5.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item filter frontend">
                    <a class="portfolio-link" href="#portfolioModal6" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-6.jpg" alt=""/>
                    </a>
                </div>              
                <div class="col-sm-4 portfolio-item filter frontend">
                    <a class="portfolio-link" href="#portfolioModal7" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-7.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item filter frontend">
                    <a class="portfolio-link" href="#portfolioModal8" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-8.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item filter backend">
                    <a class="portfolio-link" href="#portfolioModal9" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-9.jpg" alt=""/>
                    </a>
                </div>  
                <div class="col-sm-4 portfolio-item filter backend">
                    <a class="portfolio-link" href="#portfolioModal10" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-10.jpg" alt=""/>
                    </a>
                </div> 
                <div class="col-sm-4 portfolio-item filter backend">
                    <a class="portfolio-link" href="#portfolioModal11" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-11.jpg" alt=""/>
                    </a>
                </div>                 
                <div class="col-sm-4 portfolio-item filter fundamental">
                    <a class="portfolio-link" href="#portfolioModal1" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-1.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item filter fundamental">
                    <a class="portfolio-link" href="#portfolioModal2" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-2.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-sm-4 portfolio-item filter fundamental">
                    <a class="portfolio-link" href="#portfolioModal3" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-3.jpg" alt=""/>
                    </a>
                </div> 
                <div class="col-sm-4 portfolio-item filter mobile">
                    <a class="portfolio-link" href="#portfolioModal14" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-14.jpg" alt=""/>
                    </a>
                </div> 
                <div class="col-sm-4 portfolio-item filter mobile">
                    <a class="portfolio-link" href="#portfolioModal13" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-13.jpg" alt=""/>
                    </a>
                </div> 
                <div class="col-sm-4 portfolio-item filter mobile">
                    <a class="portfolio-link" href="#portfolioModal15" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-15.jpg" alt=""/>
                    </a>
                </div> 
                <div class="col-sm-4 portfolio-item filter mobile">
                    <a class="portfolio-link" href="#portfolioModal16" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-16.jpg" alt=""/>
                    </a>
                </div> 
                <div class="col-sm-4 portfolio-item filter mobile">
                    <a class="portfolio-link" href="#portfolioModal17" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-17.jpg" alt=""/>
                    </a>
                </div> 
                <div class="col-sm-4 portfolio-item filter mobile">
                    <a class="portfolio-link" href="#portfolioModal18" data-toggle="modal">
                        <div class="caption-port">
                            <div class="caption-port-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/p-18.jpg" alt=""/>
                    </a>
                </div> 
            </div>
        </section>

      {/*====================================================
                          SKILLS
      ======================================================*/}       
        <section class=" d-flex flex-column" id="skills">
          <div class="p-lg-5 p-3 skill-cover">
            <h3 class="text-center text-white">Coding Skills</h3>
            <div class="row text-center my-auto "> 
                <div class="col-md-3 col-sm-6">
                    <div class="skill-item">
                        <i class="fa fa-html5 fa-5x"></i>
                        <h2><span class="counter"> 70 </span><span>%</span></h2>
                        <p>HTML5</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="skill-item">
                        <i class="fa fa-css3 fa-5x"></i>
                        <h2><span class="counter"> 65 </span><span>%</span></h2>
                        <p>CSS3</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="skill-item">
                        <i class="fab fa-js-square fa-5x"></i>
                        <h2><span class="counter"> 75 </span><span>%</span></h2>
                        <p>JavaScript</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="skill-item">
                        <i class="fab fa-react fa-5x"></i>
                        <h2><span class="counter"> 72 </span><span>%</span></h2>
                        <p>React</p>
                    </div>
                </div>
                
            </div>
          </div> 
        </section>

      {/*====================================================
                            CONTACT
      ======================================================*/}       
        {/* <section class="resume-section p-3 p-lg-5 d-flex flex-column">
            <div class="row my-auto" id="contact"> 
              <div class="col-md-8">
                <div class="contact-cont">
                  <h3>CONTACT Us</h3>
                  <div class="heading-border-light"></div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>   
                <div class="row con-form">
                  <div class="col-md-12">
                    <input type="text" name="full-name" placeholder="Full Name" class="form-control"/>
                  </div>
                  <div class="col-md-12">
                    <input type="text" name="email" placeholder="Email Id" class="form-control"/>
                  </div>
                  <div class="col-md-12">
                    <input type="text" name="subject" placeholder="Subject" class="form-control"/>
                  </div>
                  <div class="col-md-12"><textarea name="" id=""></textarea></div>
                  <div class="col-md-12 sub-but"><button class="btn btn-general btn-white" role="button">Send</button></div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 mt-5"> 
                <div class="contact-cont2"> 
                  <div class="contact-add contact-box-desc">
                    <h3><i class="fa fa-map-marker cl-atlantis fa-2x"></i> Address</h3>
                    <p>25, Dist town Street, Logn <br/>
                    California, US <br/></p>
                  </div>
                  <div class="contact-phone contact-side-desc contact-box-desc">
                    <h3><i class="fa fa-phone cl-atlantis fa-2x"></i> Phone</h3>
                    <p>800 123 3456 <br/>900 123 3457</p>
                  </div>
                  <div class="contact-mail contact-side-desc contact-box-desc">
                    <h3><i class="fa fa-envelope-o cl-atlantis fa-2x"></i> Email</h3>
                  <address class="address-details-f"> 
                    Fax: 800 123 3456 <br/>
                    Email: <a href="mailto:info@themsbit.com" class="">info@themsbit.com</a>
                  </address>
                  <ul class="list-inline social-icon-f top-data">
                    <li><a href="#" target="_empty"><i class="fa top-social fa-facebook" style={{color: '#4267b2', borderColor:'#4267b2'}}></i></a></li>
                    <li><a href="#" target="_empty"><i class="fa top-social fa-twitter" style={{color: '#4AB3F4', borderColor:'#4AB3F4'}}></i></a></li>
                    <li><a href="#" target="_empty"><i class="fa top-social fa-google-plus" style={{color: '#e24343', borderColor:'#e24343'}}></i></a></li> 
                  </ul>
                  </div>
                </div>
              </div> 
            </div>
        </section>

        <section class=" d-flex flex-column" id="maps">
          <div id="map">
            <div class="map-responsive">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
            </div>
          </div>
        </section> */}


      </div>

  {/*====================================================
                      PORTFOLIO MODALS
  ======================================================*/}

<div class="portfolio-modal modal fade" id="portfolioModal12" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Simple E-commerce</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-12.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    a full stack e-commerce website where completely built by JavaScript framework like React JS (frontend), Express JS (backend), and using MySQL database. GET-Myu store is the place to order some Japanese music stuff like CDs, DVDs, Blu-rays, and collectibles for Indonesia areas.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/FinalProject_Ecommerce" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>     

      <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Profile Picture Generator</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-4.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a frontend app where connected to robohash web. Robohash is an easy web service that makes it easy to provide unique, robot/alien/monster/whatever images for any text. Put in any text, such as IP address, email, filename, userid, or whatever else you like, and get back a pretty image for your site. With hundreds of millions of variations, Robohash is the among the leading robot-based hashing tools on the web. source: https://robohash.org/
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/Profile_Picture_Generator" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                            <span>  </span>
                                            <a href="https://front-soal1-lulukarissa.firebaseapp.com" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-globe-americas fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>    

      <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Dad Jokes</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-5.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is random dad jokes website where built by React JS and using an official joke API from https://github.com/15Dkatz/official_joke_api</p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/Dad_Jokes" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                            <span>  </span>
                                            <a href="https://quiet-plateau-99565.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-globe-americas fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>    

      <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Bitcoin</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-6.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a bitcoin converter and info app where built by ReactJS and using Blockchain Exchange Rates API (https://blockchain.info/api/exchange_rates_api)
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/React_Bitcoin" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                            <span>  </span>
                                            <a href="https://front-soal3-lulukarissa.netlify.com/" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-globe-americas fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>   

      <div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">SportsDB</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-7.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple react soccer app using sportsDB API https://www.thesportsdb.com/api.php where you can access the team info of three leagues and the player's name.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/React_SportsDB" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                            <span>  </span>
                                            <a href="https://fast-stream-17825.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-globe-americas fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>    

      <div class="portfolio-modal modal fade" id="portfolioModal8" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Weather Map</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-8.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple react weather app using OpenWeatherMap API where you can input the city's name and get the info.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/React_Weather" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                            <span>  </span>
                                            {/* Jangan lupa diisi!! */}
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-globe-americas fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  

      <div class="portfolio-modal modal fade" id="portfolioModal9" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">CPU Data</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-9.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple program using a JavaScript backend framework Express JS and MongoDB database through Mongoose package to get data like the OS type, OS platform or free RAM memory.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/Express_Mongoose_DataCPU" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  

      <div class="portfolio-modal modal fade" id="portfolioModal10" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Authentication</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-10.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple authentication program using a JavaScript backend framework Express JS and MySQL database.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/Express_MySQL_Auth" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  

      <div class="portfolio-modal modal fade" id="portfolioModal11" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Staff Data</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-11.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple program using JavaScript backend framework Express JS. You can input staff data to MySQL database only with name and birthdate, then get their age and zodiac.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/Express_MySQL_Staff" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  

      <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">FPB & KPK</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-1.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    Sebuah program untuk menghitung Faktor Persekutuan Terbesar (FPB) dan Kelipatan Persekutuan Kecil (KPK) dari dua buah bilangan menggunakan bahasa javascript.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/FPB_KPK" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>   

      <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Kategori Bilangan</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-2.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    Program untuk menentukan kategori dari sebuah bilangan yang diinput ke dalam fungsi JavaScript.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/Kategori_Bilangan" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div> 

      <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Data Tabel</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-3.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    Data tabel menggunakan basic HTML yang dapat menginput nama, tanggal lahir, dan kota. Kemudian mendapatkan hasil berupa data usia, tahun pensiun dan zodiak dari tanggal lahir yang diinput. Serta menyelipkan fungsi sortir berdasarkan data yang diinput dan menghapus data.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/Data_Tabel" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>     

      <div class="portfolio-modal modal fade" id="portfolioModal14" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Body Mass Index</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-14.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple React Native App to count Body Mass Index. Body Mass Index is a simple calculation using a person's height and weight. The formula is BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/ReactNative_IMT" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  

      <div class="portfolio-modal modal fade" id="portfolioModal13" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">LaLiga</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-13.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple React Native App to find the data of La Liga Football Team based on list and the player's description info using an API from SportsDB https://www.thesportsdb.com/api.php.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/ReactNative_LaLiga" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  

      <div class="portfolio-modal modal fade" id="portfolioModal15" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                            <div class="modal-body">
                                <div class="title-bar">
                                  <div class="col-md-12">
                                    <h2 class="text-center">Zomato</h2>
                                    <div class="heading-border"></div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <img class="img-fluid img-centered" src="img/portfolio/p-15.jpg" alt=""/>
                                  </div>
                                  <div class="col-md-6">
                                    <p>
                                    This is a simple React Native app using an API from Zomato. You can input the food name to find a list of restaurants, its location and the food price.
                                    </p>
                                    <ul class="list-inline item-details">
                                        <li>
                                            <a href="https://github.com/lulukarissa/ReactNative_Zomato" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github fa-3x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  

     </div>
    );
  }
}

export default Resume;
