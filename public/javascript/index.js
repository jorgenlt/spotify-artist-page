
// discography buttons & events
const popularBtn = document.querySelector('#popular-btn');
const albumsBtn = document.querySelector('#albums-btn');
const singlesBtn = document.querySelector('#singles-btn');
const compilationsBtn = document.querySelector('#compilations-btn');

const popularReleases = document.querySelector('#popular-releases');
const albums = document.querySelector('#albums');
const singles = document.querySelector('#singles');
const compilations = document.querySelector('#compilations');

const chooseDiscography = (button, content) => {
    popularBtn.classList.remove('white-bg');
    popularReleases.classList.add('display-none');
    albumsBtn.classList.remove('white-bg');
    albums.classList.add('display-none');
    singlesBtn.classList.remove('white-bg');
    singles.classList.add('display-none');
    compilationsBtn.classList.remove('white-bg');
    compilations.classList.add('display-none');

    button.classList.add('white-bg');
    content.classList.remove('display-none');
};

popularBtn.addEventListener('click', () => chooseDiscography(popularBtn, popularReleases));

albumsBtn.addEventListener('click', () => chooseDiscography(albumsBtn, albums));

singlesBtn.addEventListener('click', () => chooseDiscography(singlesBtn, singles));

compilationsBtn.addEventListener('click', () => chooseDiscography(compilationsBtn, popularReleases));


// fade out ONLY banner-bg on scroll (keep text)
const main = document.querySelector('#main');
const bannerBg = document.querySelector('#banner-bg');

main.addEventListener('scroll', () => {
    let scrolled = main.scrollTop;
    let bannerBgHight = bannerBg.offsetHeight;
    let opacity = 1 - (scrolled * 2.2) / bannerBgHight;
    bannerBg.style.opacity = opacity;
    bannerBg.style.height = `${500 - scrolled}px`
});



