let intro = document.querySelector('.intro');
let introVideo = document.querySelector('.intro .intro-video');

introVideo.addEventListener('click', stopIntroAnimation)

function stopIntroAnimation() {
    intro.classList.add('stop-animation')
    introVideo.controls = 'true';
    window.scrollTo(0, 200)
}