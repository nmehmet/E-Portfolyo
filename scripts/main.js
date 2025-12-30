
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(sections => {
                const sectionTop = sections.offsetTop - 300;
                if (scrollY >= sectionTop) {
                    currentSection = sections.getAttribute("id");
                }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if(link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
