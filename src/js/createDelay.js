import setNumber from './setNumber';

/**
 *
 * @param {HTMLDivElement} element
 * @param {number} delay
 * @returns {Promise<any>}
 */
export default function createDelay(element, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setNumber(element, 0);
      resolve({ element, delay });
    }, delay);
  });
}
