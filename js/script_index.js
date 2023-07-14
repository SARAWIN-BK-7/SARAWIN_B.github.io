// Smooth scrolling animation for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let anchorLink of anchorLinks) {
  anchorLink.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = anchorLink.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
}
