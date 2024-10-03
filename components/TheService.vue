<template>
  <div id="services" class="services-section">
    <div class="container">
      <h1>Our Services</h1>
 <!-- <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"> 
                     <defs>  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">  
                      <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop> 
                       <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                     
                         </linearGradient> </defs>                
                         <path fill="url(#sw-gradient)" d="M33.2,-15.5C34.8,-6,22.1,3.5,10.2,11.6C-1.7,19.7,-12.9,26.4,-17.7,23.2C-22.5,20,-21,6.8,-17,-6C-13,-18.9,-6.5,-31.5,4.7,-33C15.8,-34.5,31.6,-25,33.2,-15.5Z" 
                         width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: 0.3s;"></path>           
                           </svg> -->
      <div class="services-content">
        <div class="service-item">
          <div class="service-icon">
            <!-- Glow effect decoration -->
            <div class="glow-effect"></div>
            <!-- Service icon or image -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="icon">
              <path d="M12 1v22M1 12h22" />
            </svg>
          </div>
          <div class="service-text">
            <h2>Animation</h2>
            <p>To create stunning animations, clients need to:</p>
            <ul>
              <li>Provide a detailed script or storyboard.</li>
              <li>Specify animation style and tone.</li>
              <li>Be clear about character designs and settings.</li>
            </ul>
            <a href="/contact" class="contact-button">Get in Touch</a>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <!-- Glow effect decoration -->
            <div class="glow-effect"></div>
            <!-- Service icon or image -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="icon">
              <path d="M12 1v22M1 12h22" />
            </svg>
          </div>
          <div class="service-text">
            <h2>Illustration</h2>
            <p>For high-quality illustrations, clients should:</p>
            <ul>
              <li>Share reference images or concepts.</li>
              <li>Define the purpose and style of the illustration.</li>
              <li>Communicate any specific details or elements required.</li>
            </ul>
            <a href="/contact" class="contact-button">Get in Touch</a>
          </div>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <!-- Glow effect decoration -->
            <div class="glow-effect"></div>
            <!-- Service icon or image -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="icon">
              <path d="M12 1v22M1 12h22" />
            </svg>
          </div>
          <div class="service-text">
            <h2>Character Design</h2>
            <p>For effective character design, clients need to:</p>
            <ul>
              <li>Describe the character’s personality and role.</li>
              <li>Provide any existing sketches or ideas.</li>
              <li>Specify color schemes and design preferences.</li>
            </ul>
            <a href="/contact" class="contact-button">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="contact-form-section">
      <div class="container">
        <h2>Contact Us for More Details</h2>
        <form action="/submit-form" method="post" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
/* Services Section */
.services-section {
  background-color: #000000;

  padding: 50px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styling */
h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  color: #d5d0cb;
}

/* Service Items */
.services-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.service-item {
  background-color: #333; /* Dark background for each item */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(117, 255, 31, 0.611);
}

.service-icon {
  width: 80px;
  height: 80px;
  background-color: #000000; /* Button color */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  position: relative;
  box-shadow: 0 12px 24px rgb(0, 0, 0);
}

.glow-effect {
  position: absolute;
  top: -15px;
  /* left: 10-px; */
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(27, 142, 35), rgb(233, 213, 180) 100%);
  /* filter: blur(-100px); */
  
  
}

.icon {
  width: 500px;
  height: 500px;
  color: #000000;
  filter:blur(60px);

  
}

.service-text {
  color: #fff;
}

.service-text h2 {
  font-size: 1.75rem;
  margin-bottom: 15px;
}

.service-text p {
  font-size: 1rem;
  margin-bottom: 15px;
}

.service-text ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
  font-size: 0.9rem;
  text-align: left;
}

.service-text li {
  margin-bottom: 10px;
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #ff5722;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #19e63b;
}

/* Contact Form Section
.contact-form-section {
  background-color:#48544a;

 
  
  padding: 50px 50x;
  margin-top: 20px;
}

.contact-form-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #f4f3f3;
}

.contact-form {
  border-radius: 30%;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #ff8f18;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #ff5722;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e64a19;
} */
</style>
