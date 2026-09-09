const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach((item) => observer.observe(item));

const answers = document.querySelectorAll('.answer');
const feedback = document.querySelector('.answer-feedback');
answers.forEach((answer) => {
  answer.addEventListener('click', () => {
    answers.forEach((item) => item.classList.remove('selected'));
    answer.classList.add('selected');
    if (answer.dataset.answer === 'correct') {
      feedback.textContent = 'EXATAMENTE.';
      feedback.dataset.state = 'correct';
    } else {
      feedback.textContent = 'TENTE OLHAR POR OUTRO ÂNGULO.';
      feedback.dataset.state = 'try-again';
    }
  });
});

const stage = document.querySelector('#sequence-stage');
const shape = document.querySelector('.sequence-shape');
const message = document.querySelector('.sequence-message');
const positions = [
  [50, 50], [24, 63], [75, 34], [38, 25], [64, 72], [86, 57]
];
let taps = 0;
stage.addEventListener('click', (event) => {
  const rect = stage.getBoundingClientRect();
  const x = Math.round(((event.clientX - rect.left) / rect.width) * 100);
  const y = Math.round(((event.clientY - rect.top) / rect.height) * 100);
  shape.style.left = `calc(${Math.max(7, Math.min(93, x))}% - 23px)`;
  shape.style.top = `calc(${Math.max(17, Math.min(80, y))}% - 23px)`;
  shape.style.transform = `rotate(${45 + taps * 24}deg) scale(${1 + (taps % 3) * .08})`;
  taps += 1;
  if (taps >= 3) {
    message.textContent = 'Você acabou de criar uma sequência.';
  }
  if (taps >= 5) {
    message.textContent = 'Na ginástica, cada pessoa pode contribuir de uma maneira diferente. Quando essas diferenças se encontram, nasce uma apresentação coletiva.';
  }
});

const videoPlaceholder = document.querySelector('.video-placeholder');
videoPlaceholder.addEventListener('click', () => {
  videoPlaceholder.querySelector('small').textContent = 'Espaço reservado — adicione o arquivo ou link do vídeo da apresentação.';
});
videoPlaceholder.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    videoPlaceholder.click();
  }
});
