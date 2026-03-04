const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// LINKs 
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
            window.scrollTo({ top: target.offsetTop - navbar.offsetHeight, behavior:'smooth' });
        }
    });
});


constnavbar= document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetHref = link.getAttribute('href');
        if(targetHref.startsWith('#')) {
            const target = document.querySelector(targetHref);
            if(target){
                window.scrollTo({ top: target.offsetTop - navbar.offsetHeight, behavior:'smooth' });
            }
        } else {
            window.location.href = targetHref;
        }
    });
});

// <--menu page -->
const searchBar = document.getElementById('searchBar');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCategories = document.querySelectorAll('.menu-category');

function filterMenu() {
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

searchBar.addEventListener('input', filterMenu);