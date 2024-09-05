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
            <h1 class="title has-text">👋 Selam here</h1>
            <p class="subtitle has-text">welcome to my portfolio, A digital artist <br> with over 3 years experience. feel free to touch anything just not the exit button, unless you want to die of course...🤨 <br> just kidding 😄, you can leave .. after using my service 😈</p>
            <div class="button-container">
              <a class="button is-rounded is-light cute-button" href="/">Useless but</a>
            </div>
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
  
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  filter: brightness(0.8) grayscale(0.1);
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
  background: #ffffff;
  border-radius: 75px;
  z-index: -1;
  animation: 1s clockwise infinite;
}

.hero-card-image-container:hover::after {
  background: #F3CE5E;
  animation: 2s counterclockwise infinite;
}

/* @keyframes clockwise {
  0% { top: -5px; left: 0; }
  12% { top: -2px; left: 2px; }
  25% { top: 0; left: 5px; }
  37% { top: 2px; left: 2px; }
  50% { top: 5px; left: 0; }
  62% { top: 2px; left: -2px; }
  75% { top: 0; left: -5px; }
  87% { top: -2px; left: -2px; }
  100% { top: -5px; left: 0; }
}

@keyframes counterclockwise {
  0% { top: -5px; right: 0; }
  12% { top: -2px; right: 2px; }
  25% { top: 0; right: 5px; }
  37% { top: 2px; right: 2px; }
  50% { top: 5px; right: 0; }
  62% { top: 2px; right: -2px; }
  75% { top: 0; right: -5px; }
  87% { top: -2px; right: -2px; }
  100% { top: -5px; right: 0; }
} */

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
.title {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: #fffddd;
  margin-bottom: 20px;
}

.subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgb(246, 255, 197);
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Button container */
.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* Button styling */
.button {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
  font-size: 1rem;
  background-color: #ff5722;
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
