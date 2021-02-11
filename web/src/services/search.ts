const FAILURE_COEFF = 10;

const MAX_SERVER_LATENCY = 200;

function getRandomBool(n: number): boolean {
  var maxRandomCoeff = 1000;

  if (n > maxRandomCoeff) n = maxRandomCoeff;

  return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}

export function getSuggestions(text: string | null): Promise<undefined | (string | null)[]> {
  var pre = 'pre';

  var post = 'post';

  var results: (string | null)[] = [];

  if (getRandomBool(2)) {
    results.push(pre + text);
  }

  if (getRandomBool(2)) {
    results.push(text);
  }

  if (getRandomBool(2)) {
    results.push(text + post);
  }

  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }

  return new Promise((resolve, reject) => {
    var randomTimeout = Math.random() * MAX_SERVER_LATENCY;

    setTimeout(() => {
      if (getRandomBool(FAILURE_COEFF)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}
