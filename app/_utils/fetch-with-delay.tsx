export default function fetchWithDelay(url:string, options:object, delay:number = 1000): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url, options)
        .then(response => resolve(response))
        .catch(error => reject(error));
    }, delay);
  });
}