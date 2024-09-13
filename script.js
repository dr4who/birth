// Helper function to detect if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to handle the scroll event and image animation
function handleScroll() {
  const images = document.querySelectorAll('.image-wrapper');

  images.forEach((image, index) => {
    // Alternate between left and right based on index
    if (isInViewport(image)) {
      image.classList.add('visible');
      image.classList.remove('fade-out-left', 'fade-out-right');
    } else {
      if (index % 2 === 0) {
        image.classList.add('fade-out-left');
      } else {
        image.classList.add('fade-out-right');
      }
      image.classList.remove('visible');
    }
  });
}

// Attach the scroll event listener to trigger animations
window.addEventListener('scroll', handleScroll);

