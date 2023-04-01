
// discography buttons & events
const popularBtn = document.querySelector('#popular-btn');
const albumsBtn = document.querySelector('#albums-btn');
const singlesBtn = document.querySelector('#singles-btn');
const compilationsBtn = document.querySelector('#compilations-btn');

const popularReleases = document.querySelector('#popular-releases');
const albums = document.querySelector('#albums');
const singles = document.querySelector('#singles');
const compilations = document.querySelector('#compilations');

popularBtn.addEventListener('click', () => {
    popularBtn.classList.add('white-bg');
    popularReleases.classList.remove('display-none');
    albumsBtn.classList.remove('white-bg');
    albums.classList.add('display-none');
    singlesBtn.classList.remove('white-bg');
    singles.classList.add('display-none');
    compilationsBtn.classList.remove('white-bg');
    compilations.classList.add('display-none');
});

albumsBtn.addEventListener('click', () => {
    popularBtn.classList.remove('white-bg');
    popularReleases.classList.add('display-none');
    albumsBtn.classList.add('white-bg');
    albums.classList.remove('display-none');
    singlesBtn.classList.remove('white-bg');
    singles.classList.add('display-none');
    compilationsBtn.classList.remove('white-bg');
    compilations.classList.add('display-none');
});

singlesBtn.addEventListener('click', () => {
    popularBtn.classList.remove('white-bg');
    popularReleases.classList.add('display-none');
    albumsBtn.classList.remove('white-bg');
    albums.classList.add('display-none');
    singlesBtn.classList.add('white-bg');
    singles.classList.remove('display-none');
    compilationsBtn.classList.remove('white-bg');
    compilations.classList.add('display-none');
});

compilationsBtn.addEventListener('click', () => {
    popularBtn.classList.remove('white-bg');
    popularReleases.classList.add('display-none');
    albumsBtn.classList.remove('white-bg');
    albums.classList.add('display-none');
    singlesBtn.classList.remove('white-bg');
    singles.classList.add('display-none');
    compilationsBtn.classList.add('white-bg');
    compilations.classList.remove('display-none');
});

