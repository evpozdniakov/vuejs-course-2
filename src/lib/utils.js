/**
 * How to use:
 * new Promise(...)
 *  .then(delay(200))
 *  .then(...)
 * @param {number} mls Delay length in milliseconds
 * @returns {() => Promise}
 */
export function delay(mls = 500) {
  return (...args) => new Promise(resolve => {
    setTimeout(resolve, mls, ...args)
  })
}
