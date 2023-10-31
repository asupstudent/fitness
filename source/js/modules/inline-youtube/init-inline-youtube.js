const container = document.querySelector('.about__video');
const cover = document.querySelector('.about__video').querySelector('picture');
const button = document.querySelector('.about__video').querySelector('.about__play-button');

const createVideo = () => {
  const video = document.createElement('iframe');

  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  video.setAttribute('allowfullscreen', '');
  video.classList.add('about__video-player');
  container.append(video);
};

const initYoutubeVideo = () => {
  if (container && cover && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      container.classList.remove('about__video--overlay');
      cover.style.display = 'none';
      button.style.display = 'none';
      createVideo();
    });
  }
};

export {initYoutubeVideo};
