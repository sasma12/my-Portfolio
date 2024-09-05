<template>
  <div class="animation-page">
    <!-- Navigation bar component -->
    <TheNav />
    
    <!-- Welcome text section -->
    <section class="welcome-section">
      <h1>Welcome to Our Animation Gallery! 🎬✨</h1>
      <p>Explore our collection of captivating animation projects, including videos and images that showcase our creativity and skill.</p>
    </section>
    
    <!-- Media section -->
    <section class="media-section">
      <h2>Videos</h2>
      <div class="media-container">
        <div v-for="(item, index) in videos" :key="index" class="media-item">
          <video controls :src="item.src" class="media-video"></video>
          <div class="media-info">
            <h3 class="media-title">{{ item.title }}</h3>
            <p class="media-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <h2>Images</h2>
      <div class="media-container">
        <div v-for="(item, index) in images" :key="index" class="media-item">
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
          title: 'Animation Video 1',
          src: '/videos/14.mp4',
          description: 'Description of Animation Video 1'
        },
        {
          title: 'Animation Video 2',
          src: '/videos/15.mp4',
          description: 'Description of Animation Video 2'
        },
        {
          title: 'Animation Video 3',
          src: '/videos/16.mp4',
          description: 'Description of Animation Video 3'
        }
      ],
      images: [
        {
          title: 'Animation Image 1',
          src: '/images/anim1.jpg',
          description: 'Description of Animation Image 1'
        },
        {
          title: 'Animation Image 2',
          src: '/images/anim2.jpg',
          description: 'Description of Animation Image 2'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Page layout */
.animation-page {
  background-color: #f0f0f0; /* Light background for better contrast */
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
  flex-wrap: wrap;
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

.media-video {
  width: 100%;
  height: auto;
  object-fit: cover; /* Crops excess corners */
}

.media-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Crops excess corners */
}
</style>
