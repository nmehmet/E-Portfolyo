document.querySelectorAll('.project-slider').forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('img');
    const nextButton = slider.querySelector('.next');
    const prevButton = slider.querySelector('.prev');
    let index = 0;

    function updateSlider() 
    {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });
});