// Fetch the navbar HTML
fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Find the placeholder div and insert the fetched HTML
        document.getElementById('navbar').innerHTML = data;
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


    
