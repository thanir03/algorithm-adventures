package Recursion;

import java.util.ArrayList;
import java.util.List;

// The main problem is to find combination sum of candidates that could achieve target 
// Able to pick any number of candidates 
// The main problem is not trying every single candidate to get combination sum 
// But to prevent duplicates of the same candidate that could achieve the target 
// ex : [2,3,5] target : 7

// [2,2,3] 
// [2,3,2] | same 
// [3,2,2] | same 

// [5,2]
// [2,5] | same 
// to prevent this we could track index 
// and only access the element on the right 
// ex : 2 can access 2 & 3 & 5
// ex : 3 can access 3
// ex : 5 can access 5 

class Solution {

  public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> combinations = new ArrayList<>();
    helper(candidates, target, new ArrayList<>(), 0, combinations);
    return combinations;
  }

  public static void helper(int[] candidate, int target, ArrayList<Integer> currentSum, int idx,
      List<List<Integer>> combinations) {
    if (target == 0) {
      combinations.add(new ArrayList<>(currentSum));
      return;
    }
    for (int i = idx; i < candidate.length; ++i) {
      if (candidate[i] <= target) {
        currentSum.add(candidate[i]);
        helper(candidate, target - candidate[i], currentSum, i, combinations);
        currentSum.remove(currentSum.size() - 1);
      }
    }

  }
}