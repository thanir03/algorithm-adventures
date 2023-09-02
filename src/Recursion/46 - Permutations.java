package Recursion;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Sorting method and checking the previous element whether they are the same as the previous element doesnt work here , because when the items get swapped , the sorted order nature changes

// Permutation duplicates 

class Permutation {

  public static void main(String[] args) {
    Permutation permutation = new Permutation();
    int[] arr = { 1, 1, 2, 2 };
    permutation.permuteUnique(arr);
  }

  public List<List<Integer>> permuteUnique(int[] nums) {
    HashMap<Integer, Integer> hashMap = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      if (hashMap.containsKey(nums[i])) {
        hashMap.put(nums[i], hashMap.get(nums[i]) + 1);
      } else {
        hashMap.put(nums[i], 1);
      }
    }
    int n = nums.length;
    List<List<Integer>> permutation = new ArrayList<>();
    List<Integer> currentPermutation = new ArrayList<>();
    helper(hashMap, permutation, currentPermutation, n);
    return permutation;
  }

  public void helper(HashMap<Integer, Integer> hashMap, List<List<Integer>> permutation,
      List<Integer> currentPermutation, int n) {
    if (currentPermutation.size() == n) {
      permutation.add(new ArrayList<>(currentPermutation));
      return;
    }
    for (Map.Entry<Integer, Integer> entry : hashMap.entrySet()) {
      if (entry.getValue() > 0) {
        currentPermutation.add(entry.getKey());
        hashMap.put(entry.getKey(), entry.getValue() - 1);
        helper(hashMap, permutation, currentPermutation, n);
        currentPermutation.remove(currentPermutation.size() - 1);
        hashMap.put(entry.getKey(), entry.getValue() + 1);
      }
    }
  }

}
