let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides initially
  }

  slideIndex++;

  // Loop back to the first slide if we exceed the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Call the function again after 3 seconds
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
