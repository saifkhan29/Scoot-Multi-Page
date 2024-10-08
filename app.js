// Fetch the navbar HTML
fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Find the placeholder div and insert the fetched HTML
        document.getElementById('navbar').innerHTML = data;

        const openNav = document.querySelector('.open')
        const closeNav = document.querySelector('.close')
        const navbar = document.querySelector('#navbar')

        openNav.addEventListener('click', () => {
            navbar.classList.add('active')
            document.body.style.overflowY = 'hidden';
        })

        closeNav.addEventListener('click', () => {
            navbar.classList.remove('active')
            document.body.style.overflowY = 'auto';
        })
    })
    .catch(error => {
        console.error('Error loading the navbar:', error);
    });

// Fetch the footer HTML
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        // Find the placeholder div and insert the fetched HTML
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading the footer:', error);
    });

// FAQ section
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
    
