<template>
  <div class="gallery">
    <h1 class="gallery-title">Gallery</h1>
    <div class="gallery-container">
      <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index">
        <a :href="item.link" class="gallery-link">
          <template v-if="item.type === 'image'">
            <img :src="item.src" :alt="item.title" class="gallery-image"/>
          </template>
          <template v-if="item.type === 'video'">
            <video controls :src="item.src" class="gallery-video"></video>
          </template>
          <h2 class="gallery-item-title">{{ item.title }}</h2>
          <p class="gallery-item-description">{{ item.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        {
          title: 'Animation',
          description: 'Explore various animation projects and styles.',
          type: 'image',
          src: '/images/anim.jpg', // Replace with actual video path
          link: '/animation'
        },
        {
          title: 'Illustration',
          description: 'A collection of illustrations and artwork.',
          type: 'image',
          src: '/images/illu.jpg', // Replace with actual image path
          link: '/illustration'
        },
        {
          title: 'Storyboard',
          description: 'Storyboards used for planning animations and scenes.',
          type: 'image',
          src: '/images/str.jpg', // Replace with actual image path
          link: '/storyboard'
        },
        {
          title: 'Childrensbook',
          description: 'Storyboards used for planning animations and scenes.',
          type: 'image',
          src: '/images/str.jpg', // Replace with actual image path
          link: '/childrensbook'
        },
        {
          title: 'Character Design',
          description: 'Detailed character designs and concepts.',
          type: 'image',
          src: '/images/chari.jpg', // Replace with actual image path
          link: '/character-design'
        }
      ]
    };
  }
};
</script>

<style scoped>
.gallery {
  padding: 2rem;
  background-color: #000000;
}

.gallery-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #fdf8e7;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  text-align: center;
  text-decoration: none; /* Remove underline from links */
  transition: transform 0.3s, box-shadow 0.3s; /* Add transition effects */
}

.gallery-link {
  color: inherit; /* Inherit text color from parent */
  text-decoration: none; /* Remove underline from links */
}

.gallery-image, .gallery-video {
  width: 100%;
  height: auto;
  display: block;
}

.gallery-item-title {
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
  color: #d5caca;
}

.gallery-item-description {
  margin: 0 1rem 1rem;
  color: #8d8d8d;
}

/* Add hover effects */
.gallery-item:hover {
  transform: translatey(-23px); /* Move the item slightly upwards */
  box-shadow: 0 8px 16px rgba(255, 128, 49, 0.8); /* Light up shadow */
}

.gallery-item:hover .gallery-image,
.gallery-item:hover .gallery-video {
  filter: brightness(1.1); /* Slightly increase the brightness */
}
</style>
