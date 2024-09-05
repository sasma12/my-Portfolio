<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="public/images/laag.png" alt="Logo">
        </a>
        <!-- Custom hamburger menu -->
        <div class="hamburger-container" @click="toggleNavbar">
          <div :class="['hamburger', { 'is-active': isNavbarActive }]">
            <div class="hamburger__container">
              <div class="hamburger__inner"></div>
              <div class="hamburger__hidden"></div>
            </div>
          </div>
        </div>
      </div>
      <div :class="{'navbar-menu': true, 'is-active': isNavbarActive}">
        <div class="navbar-end">
          <a class="navbar-item" href="/">Home</a>
          <a class="navbar-item" href="/#about">About</a>
          <a class="navbar-item" href="/#services">Services</a>
          <a class="navbar-item" href="/#contact">Contact</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarActive: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive;
    }
  }
};
</script>

<style scoped>
/* General styles */
.navbar {
  background-color: rgb(15, 13, 12); /* Set background color for navbar */
  padding: 10px 20px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-item img {
  max-height: 3rem; /* Adjust the height of the logo */
}

/* Navbar menu items */
.navbar-end .navbar-item {
  color: #f9d402;
  padding: 10px 15px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;
}

.navbar-end .navbar-item:hover {
  background-color: #ff5722;
  color: #fff;
  border-radius: 5px;
}

/* Custom hamburger menu */
.hamburger-container {
  display: none; /* Hidden by default */
}

.hamburger {
  padding: 15px;
  margin-left: auto;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  background-color: transparent;
}

.hamburger__container {
  width: 36px;
  height: 24px;
  position: relative;
}

.hamburger__inner,
.hamburger__inner::before,
.hamburger__inner::after,
.hamburger__hidden,
.hamburger__hidden::before,
.hamburger__hidden::after {
  width: 100%;
  height: 2px;
  background-color: #f9d402;
  border-radius: 4px;
  position: absolute;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.4s;
}

.hamburger__inner {
  top: 50%;
  transform: translate(5px, -50%);
  opacity: 1;
}

.hamburger__inner::before,
.hamburger__inner::after {
  content: "";
  opacity: 1;
  transform: translate(-10px, 0);
}

.hamburger__inner::before {
  top: -13px;
}

.hamburger__inner::after {
  top: 13px;
}

.hamburger:hover .hamburger__inner {
  transform: translate(-51px, 50%);
  opacity: 0;
}

.hamburger:hover .hamburger__inner::before,
.hamburger:hover .hamburger__inner::after {
  transform: translate(102px, 0);
  opacity: 0;
}

.hamburger.is-active .hamburger__inner {
  display: none;
}

.hamburger:hover .hamburger__hidden {
  opacity: 1;
  transform: translate(0, -50%);
}

.hamburger:hover .hamburger__hidden::before,
.hamburger:hover .hamburger__hidden::after {
  opacity: 1;
  transform: translate(0, 0);
}

.hamburger.is-active .hamburger__hidden {
  opacity: 1;
  transform: rotate(45deg);
}

.hamburger.is-active .hamburger__hidden::before {
  transform: translate(0, 13px) rotate(90deg);
  transform-origin: center;
}

.hamburger.is-active .hamburger__hidden::after {
  transform-origin: center;
  transform: translate(0, -13px) rotate(0);
}

.hamburger__hidden {
  opacity: 0;
  background-color: #ff5722;
  top: 50%;
  transform: translate(51px, -50%);
}

.hamburger__hidden::before,
.hamburger__hidden::after {
  content: "";
  transform: translate(102px, 0);
}

.hamburger__hidden::before {
  top: -13px;
}

.hamburger__hidden::after {
  top: 13px;
}

/* Media Queries */
@media (max-width: 1024px) {
  .hamburger-container {
    display: block; /* Show hamburger menu on small screens */
  }

  .navbar-menu {
    display: none; /* Hide navbar menu on small screens */
  }

  .navbar-menu.is-active {
    display: block; /* Show navbar menu when hamburger is active */
    background-color: rgb(15, 13, 12); /* Match background with navbar */
    text-align: center;
    padding: 20px 0;
  }

  .navbar-end .navbar-item {
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid #f9d402;
  }

  .navbar-end .navbar-item:last-child {
    border-bottom: none;
  }
}

@media (min-width: 1025px) {
  .hamburger-container {
    display: none; /* Hide hamburger menu on large screens */
  }

  .navbar-menu {
    display: flex; /* Show navbar menu on large screens */
  }
}
</style>
