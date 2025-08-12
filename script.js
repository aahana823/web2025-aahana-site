document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('flipped');
        setTimeout(() => {
            window.location.href = card.getAttribute('data-link');
        }, 800); // Match the CSS transition duration
    });
});
