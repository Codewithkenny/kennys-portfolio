import "./ContactComp.css";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser'



function ContactComp() {

    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        const serviceID = "";
        const templateID = "";

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                document.getElmentById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.loementById("name").value = "";
                document.getEleg(res);
                alert("Your message sent successfully!!")

            })
            .catch(err => console.log(err));

    }
    
  return (
    <>
      <div id="contact" class="contact" >
          <div class="container" data-aos="fade-up" />

              <div class="section-header">
                  <h2>Contact</h2>
                  <p>Need Help? <span>Contact Us</span></p>
              </div>

              {/* <div class="mb-3">
                  <iframe style="border:0; width: 100%; height: 350px;"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.590055219838!2d3.396605813560039!3d6.573309082266526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92a23ecf4453%3A0x5c2095701d4386b1!2s4%20Ejike%20Onyenokporo%20Cl%2C%20100242%2C%20Street%2C%20Lagos!5e0!3m2!1sen!2sng!4v1673181049610!5m2!1sen!2sng"
                      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div> */}

              <div className="row gy-4">

                  <div className="col-md-6">
                      <div className="info-item  d-flex align-items-center" >
                          <i className="icon bi bi-map flex-shrink-0 text-dark"></i>
                          <div>
                              <h3 className="text-dark">Address</h3>
                              <p className="text-dark">University of Ibadan, Ibadan. </p>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6" >
                          <div className="info-item d-flex align-items-center" >
                              <i className="icon bi bi-envelope flex-shrink-0 text-dark"></i>
                              <div>
                                  <h3 className="text-dark">Email Us</h3>
                                  <p className="text-dark">pojuagbomeji@gmail.com</p>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="info-item  d-flex align-items-center">
                              <i className="icon bi bi-telephone flex-shrink-0 text-dark"></i>
                              <div>
                                  <h3 className="text-dark">Call </h3>
                                  <p className="text-dark">+234 2756 9011</p>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="info-item  d-flex align-items-center">
                              <i className="icon bi bi-share flex-shrink-0 text-dark"></i>
                              <div>
                                  <h3 className="text-dark">Opening Hours</h3>
                                  <div><strong>Mon-Sat:</strong> 8AM - 5PM;
                                      <strong>Sunday:</strong> Closed
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

                  <form action="forms/contact.php" method="post" role="form" class="php-email-form p-3 p-md-4" >
                      <div class="row">
                          <div class="col-xl-6 form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                          </div>
                          <div class="col-xl-6 form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                  required />
                          </div>
                      </div>
                      <div class="form-group">
                          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                      </div>
                      <div class="form-group">
                          <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                      </div>
                      <div class="my-3">
                          <div class="loading">Loading</div>
                          <div class="error-message"></div>
                          <div class="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div class="text-center fs-5"><button type="submit">Send Message</button></div>
                  </form>
                
                
              </div>
              </>
      

    
        
      

  );
}

export default ContactComp;
