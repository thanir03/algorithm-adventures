package Recursion;

// Goal : Understand overlapping subproblems questions 
// Understand how to implement recursion and memoization

// Given a desired money , find the minimum coins that could be selected to achieve desired money

// But you can choose , any number of coins 
// Example: 11 , coins = [1,2,5]
// you could pick 1 coin (11 times) 
// minimum coins 

class CoinChange {

  public static void main(String[] args) {
    int[] arr = { 1, 2, 5 };
    int minimumCoins = coinChange(arr, 11);
    System.out.println(minimumCoins);
  }

  public static int coinChange(int[] arr, int total) {
    if (total == 0)
      return 0;

    int minimum = Integer.MIN_VALUE;
    for (int i : arr) {
      if (i <= total) {
        minimum = Math.min(coinChange(arr, total - i) + 1, minimum);
      }
    }

    return minimum;
  }

}
