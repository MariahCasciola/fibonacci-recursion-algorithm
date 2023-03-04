/**
 * Return the nth fibonacci number
 * @param {integer} n
 */
function fibonacci(n) {
  // base case
  if (n === 0 || n === 1) {
    return n;
  }

  // recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
