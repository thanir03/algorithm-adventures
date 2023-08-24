// Given an array , find the count that i< j and arr[i] > arr[j]
// Initial approach is nested loop to iterate to find every occurance of the right of each element 
// But the more optimized solution uses merge sort and while merging two arrays in 
// In merge sort , the index of merge sort will definitely not not be greater than left array
// and the left array and right array is sorted but the index of left array is smaller than right array
// therefore, we could easily detect the element in the left array that is greater than right array

public class CountInversion {
    public static int count = 0;

    public static void main(String[] args) {
        int[] arr = { 4, 3, 2, 1 };
        numberOfInversions(arr, arr.length);
        System.out.println(count);
    }

    public static void numberOfInversions(int[] a, int n) {
        mergeSort(a, 0, n - 1);
    }

    public static void mergeSort(int[] arr, int left, int right) {
        if (right <= left) {
            return;
        }
        int middle = (right + left) / 2;
        mergeSort(arr, left, middle);
        mergeSort(arr, middle + 1, right);
        mergeArray(arr, left, middle + 1, right);
    }

    public static void mergeArray(int[] arr, int left, int middle, int right) {
        // merging two sorted arrays
        // left -> start of the first array
        // middle - 1 -> end of the first array
        // middle -> start of the second array
        // right -> end of second array
        int[] mergedArray = new int[right - left + 1];
        int k = 0;
        int i = left;
        int j = middle;
        while (i < middle && j <= right) {
            if (arr[i] <= arr[j]) {
                mergedArray[k++] = arr[i++];
            } else {
                mergedArray[k++] = arr[j++];
                count += (middle - i);
            }
        }
        while (i < middle) {
            mergedArray[k++] = arr[i++];
        }
        while (j <= right) {
            mergedArray[k++] = arr[j++];
        }
        int ptr = left;
        for (int a = 0; a < mergedArray.length; a++) {
            arr[ptr++] = mergedArray[a];
        }
    }
}