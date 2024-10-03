<template>
  <div class="animation-page">
    <!-- Navigation bar component -->
    <TheNav />
    
    <!-- Welcome text section -->
    <section class="welcome-section">
      <!-- <h1>Welcome to Our Animation Gallery! 🎬✨</h1> -->
      <!-- <p>Explore our collection of captivating animation projects, including videos and images that showcase our creativity and skill.</p> -->
    </section>
    
    <!-- Media section -->
    <section class="media-section">
      <h2>Vi<span class="highlight">deos</span></h2>
      <div class="media-container">
        <div v-for="(item, index) in videos" :key="index" class="media-item">
          <video controls :src="item.src" class="media-video"></video>
          <div class="media-info">
            <h3 class="media-title">{{ item.title }}</h3>
            <p class="media-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <!-- <h2>Images</h2>
      <div class="media-container">
        <div v-for="(item, index) in images" :key="index" class="media-item">
          <img :src="item.src" :alt="item.title" class="media-image"/>
          <div class="media-info">
            <h3 class="media-title">{{ item.title }}</h3>
            <p class="media-description">{{ item.description }}</p> -->
          <!-- </div>
        </div>
      </div> -->
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
      videos: [
        {
          title: 'Animation Video 1',
          src: '/videos/11.mp4',
          description: 'Description of Animation Video 1'
        },
        {
          title: 'Animation Video 2',
          src: '/videos/12.mp4',
          description: 'Description of Animation Video 2'
        },
        {
          title: 'Animation Video 3',
          src: '/videos/13.mp4',
          description: 'Description of Animation Video 3'
        },

        {
          title: 'Animation Video 2',
          src: '/videos/15.mp4',
          description: 'Description of Animation Video 2'
        },
        {
          title: 'Animation Video 1',
          src: '/videos/14.mp4',
          description: 'Description of Animation Video 1'
        }
      ],
     
    };
  }
};
</script>

<style scoped>
/* Page layout */
.animation-page {
  
  background-color: #192f2f; /* Light background for better contrast */
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
  padding-top:80px;
  font-size: 20rem;
  color: #222222;}

 

.welcome-section p {
  padding: 3rem;
  font-size: 1.2rem;
  color: #e0e0e0;
}
.highlight {
  font-size:20rem;
  color: #ffcb22; /* Highlight color */
  font-weight: bold;
  font-style: oblique;
}

/* Media section */
.media-section {
  padding: 1rem 0;
}

.media-section h2 {
  text-align: center;
  font-size: 20rem;
  color: #f75110;
  margin-bottom: 1rem;
 
}

  

.media-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.media-item {
  width: 100%;
  max-width: 650px; /* Medium size */
  border-top: 3px solid #265b44;
  height: auto;
  overflow: hidden;
  text-align: center;
  position:relative;
}

.media-info {
  padding: 1rem;
  background-color: #000000;
  border-bottom: 3px solid #ff8800;
  border-radius:50px 4px ;
}

.media-title {
  font-size: 1.5rem;
  color: #cccccc;
}

.media-description {
  font-size: 1rem;
  color: #c0c0c0;
}

.media-video {
  width: 100%;
  height: auto;
  object-fit:scale-down; /* Crops excess corners */
}

.media-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Crops excess corners */
}
</style>
