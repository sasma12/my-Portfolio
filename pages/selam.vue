<template>
    <div class="blog">
      <div class="container">
        <h1>Selam's Blog</h1>
        <div v-if="posts.length">
          <div v-for="post in posts" :key="post.id" class="post">
            <h2>{{ post.title }}</h2>
            <p class="date">{{ post.date }}</p>
            <div v-html="post.content"></div>
          </div>
        </div>
        <p v-else>No posts available.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async created() {
      const response = await fetch('/posts.json');
      const data = await response.json();
      this.posts = data;
    }
  }
  </script>
  
  <style scoped>
  .blog {
    padding: 20px;
  }
  
  .post {
    margin-bottom: 20px;
  }
  
  .date {
    color: #888;
    font-size: 0.9rem;
  }
  </style>
  