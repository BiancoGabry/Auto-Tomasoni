// Magic Island
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // or any other threshold value
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


//spostamento href header
// Get all anchor links with an href attribute
const anchorLinks = document.querySelectorAll('a[href*="#"]');

// Add an event listener to each anchor link
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Get the target element (the section with the corresponding id)
    const target = document.querySelector(link.getAttribute('href'));

    // Calculate the offset (in this case, the height of the header + 20px)
    const offset = document.querySelector('.header').offsetHeight + 20;

    // Scroll to the target element with the offset
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth',
    });

    // Prevent the default anchor link behavior
    event.preventDefault();
  });
});

// Aggiungi un evento al pulsante "Show more"
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', () => {
    console.log("click");
    const informazioniExtra = button.nextElementSibling;
    if (informazioniExtra.style.display === 'none') {
      informazioniExtra.style.display = 'block';
      button.textContent = 'Mostra di meno';
    } else {
      informazioniExtra.style.display = 'none';
      button.textContent = 'Mostra di più';
    }
  });
});

//Immagini macchine vendita
function showImage(container, index) {
  const images = container.querySelectorAll('img');
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function prevImage(button) {
  const container = button.parentElement;
  let currentIndex = parseInt(container.getAttribute('data-current-index'));
  currentIndex = (currentIndex === 0) ? container.querySelectorAll('img').length - 1 : currentIndex - 1;
  container.setAttribute('data-current-index', currentIndex);
  showImage(container, currentIndex);
}

function nextImage(button) {
  const container = button.parentElement;
  let currentIndex = parseInt(container.getAttribute('data-current-index'));
  currentIndex = (currentIndex === container.querySelectorAll('img').length - 1) ? 0 : currentIndex + 1;
  container.setAttribute('data-current-index', currentIndex);
  showImage(container, currentIndex);
}


//menu hamburger
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// schermata di Caricamento
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  
  // Nascondi il caricamento dopo l'animazione
  setTimeout(() => {
      loadingScreen.style.display = 'none';
  }, 2000); // La durata deve corrispondere a quella dell'animazione (2s)
});