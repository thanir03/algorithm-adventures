//

// Time Complexity : O(n)

class myPow {
  static naive(x: number, n: number) {
    let result = 1;
    for (let i = 1; i <= Math.abs(n); i++) {
      result *= x;
    }
    if (n < 0) result = 1 / result;
    return result;
  }

  static optimal(x: number, n: number): number {
    if (n === 0) return 0;
    if (n === 1) return x;

    const isExponentEven = n % 2 === 0;

    if (isExponentEven) {
      return Math.pow(this.optimal(x, n / 2), 2);
    }
    const lowerBound = this.optimal(x, Math.floor(n / 2));
    const upperBound = lowerBound * x;
    return lowerBound * upperBound;
  }
}

console.log(myPow.optimal(0.44528, 0));

export {};
