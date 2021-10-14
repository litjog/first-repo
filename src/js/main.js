import '../scss/style.scss';
import randomNumber from './randomNumber';
import createDelay from './createDelay';

window.addEventListener('DOMContentLoaded', function () {
  window.CSS.registerProperty({
    name: '--num',
    syntax: '<integer>',
    inherits: false,
    initialValue: '0',
  });

  const divs = Array.from(document.querySelectorAll('.num'));
  const delays = [500, 1000, 1500];
  const button = document.querySelector('button');

  divs[2].addEventListener('transitionend', (e) => {
    const num = e.target.style.getPropertyValue('--num');
    button.disabled = num < 1;
  });

  button.addEventListener('click', (e) => {
    button.disabled = true;
    for (let i = 0; i <= 2; i++) {
      createDelay(divs[i], delays[i]).then(({ div, delay }) => {
        setTimeout(() => {
          div.style.setProperty('--num', randomNumber(1, 9));
        }, delay);
      });
    }
  });
});
