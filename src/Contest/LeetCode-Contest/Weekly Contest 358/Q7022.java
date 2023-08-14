import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.TreeSet;

public class Q7022 {

  public static void main(String args[]) {
    ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(5, 3, 2, 10, 15));
    minAbsoluteDifference(arr, 1);
  }

  public static int minAbsoluteDifference(List<Integer> nums, int x) {
    // Time Complexity : O(n log n)
    TreeSet<Integer> treeSet = new TreeSet<>();
    int min = Integer.MAX_VALUE;
    for (int i = 0; i < nums.size() - x; i++) {
      treeSet.add(nums.get(i + x));
      Integer higher = treeSet.ceiling(nums.get(i));
      Integer lower = treeSet.floor(nums.get(i));
      if (higher != null) {
        min = Math.min(Math.abs(higher - nums.get(i)), min);
      }
      if (lower != null) {
        min = Math.min(Math.abs(lower - nums.get(i)), min);
      }
    }
    System.out.println(min);
    return min;
  }

}