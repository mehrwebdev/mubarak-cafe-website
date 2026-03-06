const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// LINKS
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        const targetHref = link.getAttribute('href');

        if (targetHref.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(targetHref);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        }
    });
});


// MENU PAGE SEARCH + FILTER
const searchBar = document.getElementById('searchBar');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCategories = document.querySelectorAll('.menu-category');

function filterMenu() {

    if (!searchBar) return;

    const searchText = searchBar.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.filter;

    menuCategories.forEach(category => {

        const categoryName = category.dataset.category;
        const cards = category.querySelectorAll('.menu-card');

        cards.forEach(card => {

            const title = card.querySelector('h3').innerText.toLowerCase();

            const matchCategory = (activeCategory === 'all' || activeCategory === categoryName);
            const matchSearch = title.includes(searchText);

            card.style.display = (matchCategory && matchSearch) ? 'block' : 'none';

        });

    });
}

filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        filterBtns.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');

        filterMenu();

    });

});

if (searchBar) {
    searchBar.addEventListener('input', filterMenu);
}


// MOBILE NAV TOGGLE
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});