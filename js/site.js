window.addEventListener('DOMContentLoaded', (event) => {
    let tabs = document.querySelectorAll('.tab');
    Array.from(tabs).forEach(tab => {
        tab.addEventListener('click', clickEvent => {
            clickEvent.preventDefault();
            clickEvent.target.classList.toggle('active');
            clickEvent.target.parentElement.querySelector('.panel').classList.toggle('active');
        });
    });
});