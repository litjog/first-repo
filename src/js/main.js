import '../scss/style.scss';
import randomNumber from './randomNumber';
import createDelay from './createDelay';
import setNumber from './setNumber';

window.addEventListener('DOMContentLoaded', () => {
  window.CSS.registerProperty({
    name: '--num',
    syntax: '<integer>',
    inherits: false,
    initialValue: '0',
  });

  const dialog = document.querySelector('#dialog');
  const closeDialogButton = document.querySelector('#closeDialogButton');
  const divs = Array.from(document.querySelectorAll('.num'));
  const delays = [500, 1000, 1500];
  const tryButton = document.querySelector('#tryButton');

  divs[2].addEventListener('transitionend', (e) => {
    const num = e.target.style.getPropertyValue('--num');
    const [n1, n2, n3] = divs.map(
      (div) => +div.style.getPropertyValue('--num')
    );

    if (n1 === n2 && n1 === n3 && n2 === n3) {
      dialog.showModal();
    }

    tryButton.disabled = num < 1;
  });

  closeDialogButton.addEventListener('click', (e) => {
    dialog.close();
  });

  tryButton.addEventListener('click', (e) => {
    tryButton.disabled = true;
    for (let i = 0; i <= 2; i++) {
      createDelay(divs[i], delays[i]).then(({ element, delay }) => {
        setTimeout(() => {
          setNumber(element, randomNumber(1, 9));
        }, delay);
      });
    }
  });
});
