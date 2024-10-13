const toggle = document.getElementById('navtoggle');
const nav = document.querySelector('nav');
const title = document.getElementById('page-title');
const homeNav = document.getElementById('home');
const oldNav = document.getElementById('old');
const newNav = document.getElementById('new');
const largeNav = document.getElementById('large');
const smallNav = document.getElementById('small');
const cards = document.getElementById('cards');

toggle.addEventListener('click', () => {
  if (nav.classList.contains('closed')) {
    nav.classList.remove('closed');
    toggle.innerHTML = '❌';
  } else {
    nav.classList.add('closed');
    toggle.innerHTML = '☰';
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Denver Colorado",
    location: "Denver, Colorado",
    dedicated: "1986, October, 24",
    area: 29117,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-colorado-temple-lds-845690-wallpaper.jpg"
  },
  {
    templeName: "Fort Collins Colorado",
    location: "Fort Collins, Colorado",
    dedicated: "2016, October, 16",
    area: 42000,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-collins-colorado/400x250/fort-collins-colorado-temple-morning-exterior-1776055-wallpaper.jpg"
  },
  {
    templeName: "Ogden Utah",
    location: "Ogden, Utah",
    dedicated: "1972, January, 18",
    area: 112232,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
  }
];

function cardHTML(templeData) {
  return `<figure>
<h2>${templeData.templeName}</h2>
<figcaption>Location: ${templeData.location}</figcaption>
<figcaption>Dedicated: ${templeData.dedicated}</figcaption>
<figcaption>Size: ${templeData.area} sq ft</figcaption>
<img src="${templeData.imageUrl}" alt="${templeData.templeName}" loading="lazy">
</figure>`
}

function renderTemples(toRender) {
  const html = toRender.map(cardHTML);
  cards.innerHTML = html.join('');
}

renderTemples(temples);

homeNav.addEventListener('click', () => {
  title.textContent = 'Home';
  homeNav.classList.add('active');
  oldNav.classList.remove('active');
  newNav.classList.remove('active');
  largeNav.classList.remove('active');
  smallNav.classList.remove('active');
  renderTemples(temples);
});

oldNav.addEventListener('click', () => {
  title.textContent = 'Old';
  homeNav.classList.remove('active');
  oldNav.classList.add('active');
  newNav.classList.remove('active');
  largeNav.classList.remove('active');
  smallNav.classList.remove('active');
  renderTemples(temples.filter(x => parseInt(x.dedicated.split(',')[0]) < 1900));
});

newNav.addEventListener('click', () => {
  title.textContent = 'New';
  homeNav.classList.remove('active');
  oldNav.classList.remove('active');
  newNav.classList.add('active');
  largeNav.classList.remove('active');
  smallNav.classList.remove('active');
  renderTemples(temples.filter(x => parseInt(x.dedicated.split(',')[0]) > 2000));
});

largeNav.addEventListener('click', () => {
  title.textContent = 'Large';
  homeNav.classList.remove('active');
  oldNav.classList.remove('active');
  newNav.classList.remove('active');
  largeNav.classList.add('active');
  smallNav.classList.remove('active');
  renderTemples(temples.filter(x => x.area > 90000));
});

smallNav.addEventListener('click', () => {
  title.textContent = 'Small';
  homeNav.classList.remove('active');
  oldNav.classList.remove('active');
  newNav.classList.remove('active');
  largeNav.classList.remove('active');
  smallNav.classList.add('active');
  renderTemples(temples.filter(x => x.area < 10000));
});