let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo_header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2000);
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;
    
    // Check if dark mode preference exists in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply saved preference on page load
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Add event listener to toggle button
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
});
