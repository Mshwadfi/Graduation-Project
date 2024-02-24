

const ContactUs = () =>{

    return (
        <div class="contactus" id="contactus">
    <div class="container contactus-container">
        <div class="contactus-header">
          <h2>Contact Us</h2>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div class="contactus-content">
          <div class="contactus-content-left">
            <div class="Contact-Info">
              <h3 class="Contact-header">Contact Information</h3>
              <div class="Contact-box">
                <ion-icon name="mail-outline"></ion-icon>
                <p>info@example.com</p>
              </div>
              <div class="Contact-box">
                <ion-icon name="call-outline"></ion-icon>
                <p>01021669849</p>
              </div>
              <div class="Contact-box">
                <ion-icon name="location-outline"></ion-icon>
                <p>ZAGAIG</p>
              </div>
            </div>
            <div class="Contact-social">
              <h3 class="Contact-header">Social</h3>
              <div class="Contact-box">
                <ion-icon name="logo-twitter"></ion-icon>
                <p>info@example.com</p>
              </div>
              <div class="Contact-box">
                <ion-icon name="logo-facebook"></ion-icon>
                <p>info@example.com</p>
              </div>
              <div class="Contact-box">
                <ion-icon name="logo-youtube"></ion-icon>
                <p>info@example.com</p>
              </div>
              <div class="Contact-box">
                <ion-icon name="logo-linkedin"></ion-icon>
                <p>info@example.com</p>
              </div>
              <div class="Contact-box">
                <ion-icon name="logo-instagram"></ion-icon>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        <form class="contactus-content-form">
          <div class="contactus-fullname-inputs">
              <input type="text" placeholder="First Name" class="contactus-firstname-input" name="firstname"  required/>
              <input type="text" placeholder="Last Name" class="contactus-lastname-input" name="lastname" required/>
          </div>
          <input type="email" name="email" placeholder="Email" class="contactus-email-input" required/>
          <textarea name="message" id="" placeholder="Write Your Message...." class="contactus-message"></textarea>
        <button class="contactus-submit-button" >Send Message</button>
        </form>
        </div>
    </div>
</div>
    )
}

export default ContactUs;