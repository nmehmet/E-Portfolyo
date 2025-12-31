const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.4
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if(link.getAttribute("href") === `#${id}`) {
                    console.log(link);
                    link.classList.add("active");
                }
            });
        }
    });   
}, options);

sections.forEach((section) => {
    observer.observe(section);
});