<template>
    <div class="illustration-page">
      <!-- Navigation bar component -->
      <TheNav />
      
      <!-- Welcome text section -->
      <section class="welcome-section">
        <h1>Welcome to Our Illustration Gallery! 🎨✨</h1>
        <p>Explore our diverse collection of illustrations, showcasing various artistic styles and techniques.</p>
      </section>
      
      <!-- Media section -->
      <section class="media-section">
        <h2>Illustrations</h2>
        
        <div class="media-container">
          <div v-for="(item, index) in illustrations" :key="index" class="media-item">
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
        illustrations: [
          {
            title: 'Illustration 1',
            src: '/images/prf.jpg',
            description: 'Description of Illustration 1'
          },
          {
            title: 'Illustration 1',
            src: '/images/ill3.jpg',
            description: 'Description of Illustration 1'
          },
          {
            title: 'Illustration 1',
            src: '/images/ill2.jpg',
            description: 'Description of Illustration 1'
          },
          {
            title: 'Illustration 1',
            src: '/images/ill.jpg',
            description: 'Description of Illustration 1'
          },
          {
            title: 'Illustration 1',
            src: '/images/oo.jpg',
            description: 'Description of Illustration 1'
          }, 
          {
            title: 'Illustration 1',
            src: '/images/ill1.jpg',
            description: 'Description of Illustration 1'
          },
          {
            title: 'Illustration 2',
            src: '/images/ill4.jpg',
            description: 'Description of Illustration 2'
          },
          {
            title: 'Illustration 1',
            src: '/images/ill5.jpg',
            description: 'Description of Illustration 1'
          },
           {
            title: 'Illustration 1',
            src: '/images/ill6.jpg',
            description: 'Description of Illustration 1'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Page layout */
  .illustration-page {
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
    padding: 2rem 0;
  }
  
  .media-section h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .media-container {
    display: flex;
    flex-wrap:wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .media-item {
    width: 100%;
    max-width: 640px; /* Medium size */
    height: auto;
    overflow: hidden;
    text-align: center;
    position: relative;
  }
  
  .media-info {
    padding: 1rem;
    background-color: #fff;
    border-top: 1px solid #ddd;
  }
  
  .media-title {
    font-size: 1.5rem;
    color: #333;
  }
  
  .media-description {
    font-size: 1rem;
    color: #666;
  }
  
  .media-image {
    width: 100%;
    height: auto;
    object-fit: cover; /* Crops excess corners */
  }
  </style>
  