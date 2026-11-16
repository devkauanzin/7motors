const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const heroVideo = document.querySelector('.hero-video');
heroVideo.muted = true;
heroVideo.defaultMuted = true;
heroVideo.autoplay = true;
heroVideo.playsInline = true;
heroVideo.play().catch(() => {});

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Abrir menu' : 'Fechar menu');
  navigation.classList.toggle('is-open', !isExpanded);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
