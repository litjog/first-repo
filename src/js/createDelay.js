/**
 *
 * @param {HTMLDivElement} div
 * @param {number} delay
 * @returns {Promise<any>}
 */
export default function createDelay(div, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      div.style.setProperty('--num', 0);
      resolve({ div, delay });
    }, delay);
  });
}
