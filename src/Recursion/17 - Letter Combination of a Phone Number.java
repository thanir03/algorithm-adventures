package Recursion;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

class LetterCombination {

  public static Map<Integer, String> hashMap = Map.of(
      2, "abc",
      3, "def",
      4, "ghi",
      5, "jkl",
      6, "mno",
      7, "pqrs",
      8, "tuv",
      9, "wxyz");

  public static void main(String[] args) {
    LetterCombination solution = new LetterCombination();
    solution.letterCombinations("2");
  }

  public List<String> letterCombinations(String digits) {
    List<String> combinations = new ArrayList<>();
    helper(digits, combinations, "", 0);
    System.out.println(Arrays.toString(combinations.toArray()));
    return combinations;
  }

  public void helper(String digits, List<String> combinations, String curCom, int idx) {
    if (digits.length() == 0)
      return;
    if (idx == digits.length()) {
      combinations.add(curCom);
      return;
    }

    Integer currentDigit = digits.charAt(idx) - '0';
    String characters = hashMap.get(currentDigit);
    for (char c : characters.toCharArray()) {
      helper(digits, combinations, curCom + c, idx + 1);
    }
  }
}
