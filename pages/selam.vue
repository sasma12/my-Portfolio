<template>
    <div class="character-design-page">
      <!-- Navigation bar component -->
      <TheNav />
      
      <!-- Welcome text section -->
      <section class="welcome-section">
        <h1>Who's selam✨</h1>
      </section>
      
      <!-- Media section -->
      <section class="media-section">
        <div class="media-container">
          <div v-for="(item, index) in characterDesigns" :key="index" class="media-item">
            <img :src="item.src" :alt="item.title" class="media-image"/>
            <div class="media-info">
              <h3 class="media-title">{{ item.title }}</h3>
              <p class="media-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import TheNav from '~/components/TheNav.vue';
  
  export default {
    components: {
      TheNav
    },
    data() {
      return {
        characterDesigns: [
          {
            title: 'I love🥰',
            src: '/images/art.jpg',
            description: 'Art is something  i personally find to be a safe place. art is way of telling something'
          },
          {
            title: 'peaceful🌿',
            src: '/images/a.jpg',
            description: 'Description of Character Design 1'
          },
  
          {
            title: 'fun😬',
            src: '/images/b.jpg',
            description: 'Description of Character Design 2'
          },{
            title: 'Character Design 4',
            src: '/images/image.png',
            description: 'Description of Character Design 1'
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Page layout */
  .character-design-page {
    background-color: #e0dbd4; /* Light background for better contrast */
    padding: 2rem;
    font-family: Arial, sans-serif;
  }
  
  /* Navigation bar */
  TheNav {
    margin-bottom: 2rem;
  }
  
  /* Welcome text */
  .welcome-section {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .welcome-section h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  .welcome-section p {
    font-size: 1.2rem;
    color: #666;
  }
  
  /* Media section */
  .media-section {
    text-align: center;
    padding: 2rem 0;
  }
  
  .media-section h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .media-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content:space-evenly;
  }
  
  .media-item {
    width: 100%;
    max-width: 570px; /* Medium size */
    height: auto;
    overflow: hidden;
    text-align: center;
    position: relativ;
  }
  
  .media-info {
    padding: 1rem;
    background-color: #3d3d3d;
    border-top: 1px solid #ffffff;
    
  }
  
  .media-title {
    text-align:left;
    font-size: 1.5rem;
    color: #333;
  }
  
  .media-description {
    text-align:left;
    font-size: 1rem;
    color: #666;
  }
  
  .media-image {
    width: 100%;
    height: auto;
    object-fit: cover; /* Crops excess corners */
  }
  </style>
  