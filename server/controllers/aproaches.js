
// first function to find prime numbers. based on time complexity = O(N^2)

export const Aproach_1 = (a, b) => {
  let Arr = [];

  if ((a <= 0 && b <= 0) || b < a || (a < 0 && b > 0)) {
    return Arr;
  }

  for (let i = a; i <= b; i++) {
    if (i == 1 || i == 0) {
      continue;
    }

    let flag = 1;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      Arr.push(i);
    }
  }
  return Arr;
};


//second function to find prime numbers. Based on time complexity = O(N^2)

export const Aproach_2 = (a, b) => {
  let Arr = [];
  if ((a <= 0 && b <= 0) || b < a || (a < 0 && b > 0)) {
    return Arr;
  }
  for (let i = a; i <= b; i++) {
    if (i == 1 || i == 0) {
      continue;
    }
    let flag = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      Arr.push(i);
    }
  }

  return Arr;
};


// third function to find prime numbers. based on time complexity =O(N*sqrt(N))

export const Aproach_3 = (a, b) => {
  let i, j, flag, Arr = [];
  if ((a <= 0 && b <= 0) || b < a || (a < 0 && b > 0)) {
    return Arr;
  }
  if (a <= 2) {
    a = 2;
    if (b >= 2) {
      Arr.push(a);
      a++;
    }
  }
  if (a % 2 == 0) {
    a++;
  }
  for (i = a; i <= b; i = i + 2) {
    flag = 1;
    for (j = 2; j * j <= i; ++j) {
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      if (i == 1) continue;
      else Arr.push(i);
    }
  }
  return Arr;
};


// fourth function to find prime numbers. [Sieve of Eratosthenes] , time complexity = O(N*log(log(n)))";
    

export const Aproach_4 = (a, b) => {
  let Arr = [];
  if ((a <= 0 && b <= 0) || b < a || (a < 0 && b > 0)) {
    return Arr;
  }
  let prime = new Array(b + 1);

  for (let i = 2; i <= b; i++) {
    prime[i] = true;
  }
  for (let j = 2; j <= b; j++) {
    if (prime[j] == true) {
      if (j >= a) {
        Arr.push(j);
      }
      for (let k = j * j; k <= b; k = k + j) {
        prime[k] = false;
      }
    }
  }
  return Arr;
};


/* fifth function to find prime numbers. Based on time complexity O(N*sqrt(M)).
 where M is maximum value in range and N is no. of integers in range.*/

export const Aproach_5 = (a, b) => {
  let Arr = [];
  if ((a <= 0 && b <= 0) || b < a || (a < 0 && b > 0)) {
    return Arr;
  }
  for (let i = a; i <= b; i++) {
    let flag = 1;
    if (i == 2 || i == 3) {
      flag = 1;
    } else if (i <= 1 || i % 2 == 0 || i % 3 == 0) {
      flag = 0;
    }
    for (let j = 5; j * j <= i; j = j + 6) {
      if (i % j == 0 || i % (j + 2) == 0) {
        flag = 0;
      }
    }

    if (flag == 1) {
      Arr.push(i);
    }
  }
  return Arr;
};
 