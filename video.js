/* Tela de vídeo: preenche o player conforme ?v=1..4 e destaca o vídeo atual na lista. */
document.addEventListener('DOMContentLoaded', () => {
  const videos = {
    1: { title: 'Caminhada: comece devagar e vá mais longe', duration: '12:45',
         img: 'https://images.pexels.com/photos/8497647/pexels-photo-8497647.jpeg?auto=compress&cs=tinysrgb&w=1400',
         alt: 'Idoso caminhando em um parque' },
    2: { title: 'Alongamento para o corpo todo', duration: '15:30',
         img: 'https://images.pexels.com/photos/7500321/pexels-photo-7500321.jpeg?auto=compress&cs=tinysrgb&w=1400',
         alt: 'Idosa alongando o corpo sobre um tapete' },
    3: { title: 'Fortalecimento para braços e pernas', duration: '18:20',
         img: 'https://images.pexels.com/photos/7530436/pexels-photo-7530436.jpeg?auto=compress&cs=tinysrgb&w=1400',
         alt: 'Casal de idosos se exercitando com halteres' },
    4: { title: 'Exercícios de respiração e relaxamento', duration: '10:15',
         img: 'https://images.pexels.com/photos/6974989/pexels-photo-6974989.jpeg?auto=compress&cs=tinysrgb&w=1400',
         alt: 'Casal de idosos meditando sobre tapetes' }
  };

  const params = new URLSearchParams(window.location.search);
  const id = videos[params.get('v')] ? Number(params.get('v')) : 1;
  const video = videos[id];

  document.getElementById('vpLabel').textContent = 'Vídeo ' + id;
  document.getElementById('vpTitle').textContent = video.title;
  document.getElementById('vpDuration').textContent = video.duration;
  const img = document.getElementById('vpImg');
  img.src = video.img;
  img.alt = video.alt;
  document.title = video.title + ' — SafeSignal';

  document.querySelectorAll('.video-card').forEach(card => {
    const isCurrent = card.getAttribute('href') === 'video.html?v=' + id;
    if (isCurrent) card.setAttribute('aria-current', 'true');
  });

  document.getElementById('vpPlayer').addEventListener('click', () => {
    if (window.showSoon) window.showSoon('Reprodução de vídeo em breve.');
  });
});
