import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function ContactComp() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    function sendMail(e) {
        e.preventDefault();
        setIsLoading(true);

        var params = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        };

        const serviceID = "your_service_id"; // Replace with your EmailJS service ID
        const templateID = "your_template_id"; // Replace with your EmailJS template ID

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                nameRef.current.value = "";
                emailRef.current.value = "";
                subjectRef.current.value = "";
                messageRef.current.value = "";
                console.log(res); // Log the response if needed
                alert("Your message sent successfully!!");
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <>
            <div id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Contact</h2>
                        <p>Need Help? <span>Contact Us</span></p>
                    </div>
                </div>

                <div className="row gy-4">
                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center">
                            <i className="icon bi bi-map flex-shrink-0 text-dark"></i>
                            <div>
                                <h3 className="text-dark">Address</h3>
                                <p className="text-dark">University of Ibadan, Ibadan.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center">
                            <i className="icon bi bi-envelope flex-shrink-0 text-dark"></i>
                            <div>
                                <h3 className="text-dark">Email Us</h3>
                                <p className="text-dark">pojuagbomeji@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center">
                            <i className="icon bi bi-telephone flex-shrink-0 text-dark"></i>
                            <div>
                                <h3 className="text-dark">Call </h3>
                                <p className="text-dark">+234 802756 9011</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center">
                            <i className="icon bi bi-share flex-shrink-0 text-dark"></i>
                            <div>
                                <h3 className="text-dark">Opening Hours</h3>
                                <div>
                                    <strong>Mon-Sat:</strong> 8AM - 5PM;
                                    <strong>Sunday:</strong> Closed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={sendMail} action="forms/contact.php" method="post" className="php-email-form p-3 p-md-4">
                    <div className="row">
                        <div className="col-xl-6 form-group">
                            <input type="text" name="name" className="form-control" ref={nameRef} placeholder="Your Name" required />
                        </div>
                        <div className="col-xl-6 form-group">
                            <input type="email" className="form-control" name="email" ref={emailRef} placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" ref={subjectRef} placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="5" ref={messageRef} placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center fs-5">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
}

export default ContactComp;
