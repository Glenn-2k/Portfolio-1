export function toTheTop() {
    const logoContainer = document.querySelector(".logoContainer");

    logoContainer.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}