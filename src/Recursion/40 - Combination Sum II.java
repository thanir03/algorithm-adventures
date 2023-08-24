package Recursion;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {

  public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
    List<List<Integer>> combinations = new ArrayList<>();
    Arrays.sort(candidates); // to easily detect potential duplicates (right next to it )
    helper(candidates, target, new ArrayList<>(), 0, combinations);
    return combinations;
  }

  public static void helper(int[] candidates, int target, ArrayList<Integer> curCom, int start,
      List<List<Integer>> combinations) {
    if (target == 0) {
      combinations.add(new ArrayList<>(curCom));
      return;
    }

    for (int i = start; i < candidates.length; i++) {
      // skip this element if the element before it is the same and is in the same
      // recursive call
      if (i > start && candidates[i] == candidates[i - 1])
        continue;
      if (candidates[i] <= target) {
        curCom.add(candidates[i]);
        helper(candidates, target - candidates[i], curCom, i + 1, combinations);
        curCom.remove(curCom.size() - 1);
      }
    }

  }
}