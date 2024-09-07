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