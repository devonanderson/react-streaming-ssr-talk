/**
 * Utility function to fetch data with a delay
 * @param url {string} - URL to fetch
 * @param options {object} - Fetch options
 * @param delay {number} - Delay in milliseconds
 * @returns {Promise<Response>}
 */
export default function fetchWithDelay(url:string, options:object, delay:number = 1000): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url, options)
        .then(response => resolve(response))
        .catch(error => reject(error));
    }, delay);
  });
}