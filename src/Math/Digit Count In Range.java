
class NaiveSolution {

  // public static void main(String[] args) {
  // long count = digitCount(1, 1, 200);
  // System.out.println("Output : " + count);
  // }

  // O(n) amortized solution
  public static long digitCount(int digit, long low, long high) {
    long count = 0;
    for (long i = low; i <= high; i++) {
      count += calculateDigitsInNumber(digit, i);
    }
    return count;
  }

  public static long calculateDigitsInNumber(int digit, long num) {
    long count = 0;
    while (num > 0) {
      int currentDigit = (int) num % 10;
      if (currentDigit == digit) {
        count++;
      }
      num = num / 10;
    }
    return count;
  }

}

class OptimalSolution {

  public static void main(String[] args) {
    long count = digitCount(1, 1, 200);
    System.out.println("Output : " + count);
  }

  private static long countDigit(long num, int digit) {
    long count = 0;

    for (long i = 1; i <= num; i *= 10) {
      long divisor = i * 10;
      long quotient = num / divisor;
      long remaining = num % divisor;

      // Condition 1
      if (quotient > 0) {
        count = count + (quotient * i);
      }

      // Condition 2
      if (digit == 0) {
        count = count - i;
      }

      // Condition 3
      if (remaining >= digit * i) {
        count = count + (Math.min(remaining - digit * i + 1, i));
      }
    }

    return count;
  }

  public static long digitCount(int digit, long low, long high) {
    return countDigit(high, digit) - countDigit((low - 1), digit);
  }
}
