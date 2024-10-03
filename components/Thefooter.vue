<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <p>&copy; 2024 Selam-art. All rights reserved.</p>
        </div>
        <div class="footer-center">
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div class="footer-right">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="additional-links">
        <ul>
          <li>
            <a href="#" aria-label="Edge"><i class="fab fa-edge"></i></a>
          </li>
          <li>
            <a href="#" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #f5e621;
  padding: 1rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left,
.footer-center,
.footer-rigt 
{
  flex: 1;
  text-align: center;
}

.footer-left p {
  margin: 0;
}

.footer-center a {
  margin: 0 1rem;
  color: #ffe418;
  text-decoration: none;
}

.footer-center a:hover {
  text-decoration: underline;
}

.footer-right a {
  margin: 0 0.5rem;
  color: #feea15;
  font-size: 1.5rem;
}

.footer-right a:hover {
  color: #ddd;
}

.additional-links {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.additional-links ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.additional-links li {
  margin: 0 15px;
}

.additional-links a {
  position: relative; 
  display: block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: #333;
  border-radius: 50%;
  font-size: 30px;
  color: #666;
  transition: 0.5s;
}

.additional-links a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #ffee10;
  transition: 0.5s;
  transform: scale(0.9);
  z-index: -1;
}

.additional-links a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #ffee10;
}

.additional-links a:hover {
  color: #ffee10;
  box-shadow: 0 0 5px #ffee10;
  text-shadow: 0 0 5px #ffee10;
}
</style>

<script>
export default {
  name: 'FooterComponent'
}
</script>
