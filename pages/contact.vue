<template>
  <div>
    <section class="hero is-danger is-fullheight" 
      style="background-image: url('https://i.pinimg.com/236x/90/fc/51/90fc51662a7e1dbab66453b43e1e2ee4.jpg'); background-size: cover; background-position: center; position: relative;background-attachment: fixed; filter: blur(100)">
      <div class="overlay"></div>
      <div class="hero-body">
        <div class="hero-card">
          <div class="hero-card-image-container">
            <img src="public/images/card.jpg" alt="hero image" class="hero-card-image"/>
          </div>
          <div class="hero-content">
            
           
<form action="/contact" method="post" class="contact-form">
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
          
        <div class="button-container">
              <a class="button is-rounded is-light cute-button" href="/">send</a>
            </div>
          </form> 
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Import font locally for this component */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

/* Hero section styling */

.hero {
  /* background-color: rgb(205, 212, 205); */
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* filter: brightness(0.5) grayscale(0.1); */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

/* Overlay styling */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0)); */
  z-index: 1;
}

.hero-card {
  background: rgb(0, 0, 0);
  border-radius: 10px;
  max-width: 600px; 
  padding: 1rem;
}

.hero-card-image-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.hero-card-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.hero-card-image-container:hover {
  box-shadow: 0 5px 35px 0px rgba(92, 30, 30, 0.1);
}

.hero-card-image-container:hover::before, 
.hero-card-image-container:hover::after {
  display: block;
  content: '';
  position: absolute;
  width: 250px;
  height: 250px;
  /* background: #ffffff; */
  border-radius: 75px;
  z-index: -1;
  animation: 1s clockwise infinite;
}

.hero-card-image-container:hover::after {
  background: #F3CE5E;
  animation: 2s counterclockwise infinite;
}



/* Centering content within the card */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 3;
  position: relative;
}

/* Trendy fonts and text styling */
/* .title {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: #fffddd;
  margin-bottom: 20px;
} */

/* .subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgb(246, 255, 197);
  line-height: 1.6;
  margin-bottom: 20px;
} */
/* Contact Form Section */
.contact-form-section {
  

 
  
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
}

/* Button container */
.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Button styling */
.button {
  /* font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ; */
  font-size: 1rem;
  background-color: #ff5722;
  text-decoration: none;
  color: white;
  border-radius: 25px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.784);
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #b7d2b1;
  color: #ff5722;
}

.cute-button {
  text-transform:none;
  letter-spacing: 1px;
}
</style>
