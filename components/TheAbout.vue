<template>
  <div id="about" class="about-section">
    <div class="container">
      <div class="about-card">
        <div class="decorative-image top-left"></div>
        <div class="decorative-image top-right"></div>
        <div class="decorative-image bottom-left"></div>
        <div class="decorative-image bottom-right"></div>
        
        <div class="about-text">
          <h1>About <span class="highlight">Me</span></h1>
          <p>
            Hi❤️, I'm Selam, a Digital artist with a passion for Animation🥰. Specializing in 2D Animation, Illustration, and Character Design, I focus on delivering exceptional Services and innovative solutions. My experience in Animation includes working on [Brief Mention of Notable Projects or Achievements].
          </p>
          <p>
            I continuously hone my skills in [List of Skills or Technologies] and stay ahead in this ever-evolving industry. My projects range from [Brief Description of Projects], driven by a commitment to innovation and excellence.
          </p>
          <p>
            Outside of work, I enjoy [Your Hobbies/Interests], which keeps me inspired and balanced. Feel free to connect with me to explore potential collaborations or learn more about my work!
          </p>
          <a href="/selam" class="contact-button">Mooorrreee</a>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* About Section */
.about-section {
  background: linear-gradient(1deg, #000000, #ac5814); /* Gradient background */
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* About Card */
.about-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(42 53 57); /* White card background */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 12px 24px rgb(0, 0, 0);
  padding: 30px;
  text-align: center;
}

.about-image {
  margin-bottom: 20px;
}

/* .profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #e3e2e2; Border color for profile image */


.about-text {
  margin-top: 20px;
}

.about-text h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color:rgb(253 245 222) ;
  font-family: 'Poppins', sans-serif;
}

.highlight {
  color: #ff5722; /* Highlight color */
  font-weight: bold;
}

.about-text p {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color:rgb(253 245 222);
  font-family: 'Lora', serif;
}

.contact-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.125rem;
  color: #fff;
  background-color: #ff5722;
  border-radius: 8px; /* Rounded button */
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
}

.contact-button:hover {
  background-color: #e64a19;
  transform: scale(1.05); /* Subtle scale effect */
}

/* Decorative Images */
.decorative-image {
  position: absolute;
  width: 50px;
  height: 50px;
  background-image: url('public/images/oo.png'); /* Path to your image */
  background-size: cover;
  background-repeat: no-repeat;
  animation: float 4s ease-in-out infinite;
}

.top-left {
  top: -10px;
  left: -10px;
}

.top-right {
  top: -10px;
  right: -10px;
}

.bottom-left {
  bottom: -10px;
  left: -10px;
}

.bottom-right {
  bottom: -10px;
  right: -10px;
}

/* Float Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive Design */
@media (min-width: 768px) {
  .about-card {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .about-image {
    margin-bottom: 0;
    margin-right: 30px;
  }

  .profile-img {
    width: 200px;
    height: 200px;
  }
}

</style>
