// Shopping cart functionality

const cartItems = [];

function addToCart(product) {
  cartItems.push(product);
  updateCartCount();
}

function removeFromCart(product) {
  const index = cartItems.indexOf(product);
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
  updateCartCount();
}

function updateCartCount() {
  const count = cartItems.length;
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = count;
  }
}

// Navigation menu toggle
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});

// Search bar functionality
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');

searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('active');
});

// Smooth scrolling on anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const topOffset = 100;
    const elementPosition = target.offsetTop - topOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});

// Contact form validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', e => {
  e.preventDefault();

  if (nameInput.value === '') {
    alert('Please enter your name.');
  } else if (emailInput.value === '') {
    alert('Please enter your email.');
  } else if (messageInput.value === '') {
    alert('Please enter a message.');
  } else {
    form.submit();
  }
});
// Smooth scrolling
const smoothScroll = function(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const animation = function(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    const ease = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };
  
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      smoothScroll(target, 1000);
    });
  });
  
  // Mobile menu
  const menuIcon = document.querySelector('.nav__menu-icon');
  const menuNav = document.querySelector('.nav__list');
  
  menuIcon.addEventListener('click', function() {
    menuNav.classList.toggle('nav__list--active');
  });
  
  // Filter products
  const productFilters = document.querySelectorAll('.filter__btn');
  const productItems = document.querySelectorAll('.product__item');
  
  productFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const filterValue = this.dataset.filter;
      productItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.category === filterValue) {
          item.classList.remove('product__item--hidden');
        } else {
          item.classList.add('product__item--hidden');
        }
      });
    });
  });
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    const slide = document.getElementsByClassName("slides");
    const dots = docucument.getElementsByClassName(slides)
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");
    let currentIndex = 0;
    
    // Show the first slide
    slides[currentIndex].style.display = "block";
    
    // Slideshow functionality
    const slideShow = function() {
      // Hide the current slide
      slides[currentIndex].style.display = "none";

      // Update the current index
      currentIndex = (currentIndex + 1) % slides.length;
      
      // Show the next slide
      slides[currentIndex].style.display = "block";
      };
      
      // Click event listeners for the navigation buttons
      prevBtn.addEventListener("click", function() {
      // Hide the current slide
      slides[currentIndex].style.display = "none";
      
      // Update the current index
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      
      // Show the previous slide
      slides[currentIndex].style.display = "block";
      });
      
      nextBtn.addEventListener("click", function() {
      // Hide the current slide
      slides[currentIndex].style.display = "none";
      
      // Update the current index
      currentIndex = (currentIndex + 1) % slides.length;
      
      // Show the next slide
      slides[currentIndex].style.display = "block";
      });
      
      // Start the slideshow
      let intervalId = setInterval(slideShow, 5000);
      
      // Stop the slideshow on mouseover
      slides.forEach(function(slide) {
      slide.addEventListener("mouseover", function() {
      clearInterval(intervalId);
      });
      });
      
      // Restart the slideshow on mouseout
      slides.forEach(function(slide) {
      slide.addEventListener("mouseout", function() {
      intervalId = setInterval(slideShow, 5000);
      });
      });
  }
  
// Navigation functionality for slideshow
const nextSlide = function() {
    const currentSlide = document.querySelector(".active-slide");
    currentSlide.classList.remove("active-slide");
  
    if (currentSlide.nextElementSibling) {
      currentSlide.nextElementSibling.classList.add("active-slide");
    } else {
      slides[0].classList.add("active-slide");
    }
  };
  
  const prevSlide = function() {
    const currentSlide = document.querySelector(".active-slide");
    currentSlide.classList.remove("active-slide");
  
    if (currentSlide.previousElementSibling) {
      currentSlide.previousElementSibling.classList.add("active-slide");
    } else {
      slides[slides.length - 1].classList.add("active-slide");
    }
  };
  
  const navigation = function() {
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
  
    nextBtn.addEventListener("click", function() {
      nextSlide();
    });
  
    prevBtn.addEventListener("click", function() {
      prevSlide();
    });
  };
  
  navigation();
  