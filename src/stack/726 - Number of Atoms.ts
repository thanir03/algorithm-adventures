// Number of Atoms problem

// Input : Chemical formula
// Containing uppercase followed by lowered case (optional)
// Digits after Element
// Parentheses with another chemical formula

// Output : Elements in alphabetically  sorted
// example : H2OMg4O : {H : 2 , O : 2, Mg : 4}
// return H2M2Mg4

// Intuition : Using a stack : (to store all the element occurance)
// 1. Detect elements in the chemical formula
// 2. Detect number in chemical formula
// When number is encountered , add the element count
// if "(" is encountered , reset the state of variables
// if ")"

// Calculate the count of each elements
// Sorting the string

const countOfAtoms = (formula: string) => {
  let idx = 0;

  const findCount = () => {
    let hashMap: { [key: string]: number } = {};
    if (idx === formula.length) return hashMap;
    let element = "";
    let count = 0;

    while (idx < formula.length) {
      let char = formula[idx];
      if (/^[A-Za-z]+$/.test(char)) {
        if (element != "" && isUpperCase(element[0]) && isLowerCase(char)) {
          element += char;
        } else {
          if (element != "") {
            if (count === 0) count = 1;
            if (hashMap[element]) {
              hashMap[element] += count;
            } else {
              hashMap[element] = count;
            }
            element = "";
            count = 0;
          }
          count = 0;
          element = char;
        }
      } else if (char >= "0" && char <= "9") {
        if (count === 0) {
          count = parseFloat(char);
        } else {
          count = count * 10 + parseFloat(char);
        }
      } else if (char === "(") {
        if (element != "") {
          if (count === 0) count = 1;
          if (hashMap[element]) {
            hashMap[element] += count;
          } else {
            hashMap[element] = count;
          }
          element = "";
          count = 0;
        }
        idx++;
        const returnedHashMap = findCount();
        let nextNumber = 0;
        idx++;
        while (formula[idx] >= "0" && formula[idx] <= "9") {
          nextNumber = nextNumber * 10 + parseFloat(formula[idx]);
          idx++;
        }
        idx--;
        let entires = Object.entries(returnedHashMap);
        for (let i = 0; i < entires.length; i++) {
          const [element, count] = entires[i];
          if (element in hashMap) {
            hashMap[element] += count * (nextNumber === 0 ? 1 : nextNumber);
          } else {
            hashMap[element] = count * (nextNumber === 0 ? 1 : nextNumber);
          }
        }
      } else {
        if (element != "") {
          if (count === 0) count = 1;
          if (hashMap[element]) {
            hashMap[element] += count;
          } else {
            hashMap[element] = count;
          }
          element = "";
          count = 0;
        }
        return hashMap;
      }
      idx++;
    }

    if (element != "") {
      if (count === 0) count = 1;
      if (hashMap[element]) {
        hashMap[element] += count;
      } else {
        hashMap[element] = count;
      }
      element = "";
      count = 0;
    }
    return hashMap;
  };
  const sortedHashMap = Object.entries(findCount()).sort();
  let str = "";
  for (let i = 0; i < sortedHashMap.length; i++) {
    const [element, count] = sortedHashMap[i];
    str += element + (count > 1 ? count : "");
  }
  return str;
};

const isUpperCase = (str: string) => {
  return str === str.toUpperCase();
};
const isLowerCase = (str: string) => {
  return str === str.toLowerCase();
};

// Using a stack solution for resetting the state when a new formula is encountered (Mg)
type HashMap = { [key: string]: number };

const countOfAtoms2 = (formula: string) => {
  const stack: HashMap[] = [];
  let currentHashMap: HashMap = {};

  for (let i = 0; i < formula.length; i++) {
    if (formula[i] === "(") {
      stack.push(currentHashMap);
      currentHashMap = {};
    } else if (formula[i] === ")") {
      // previous state of hashmap need to be recovered
      let prevHashMap: HashMap = {};
      if (stack.length > 0) {
        prevHashMap = stack.pop()!;
      }
      i++;
      let product = 0;
      while (i < formula.length && formula[i] >= "0" && formula[i] <= "9") {
        product = product * 10 + parseFloat(formula[i++]);
      }
      i--;
      if (product === 0) product = 1;

      for (let [element, count] of Object.entries(currentHashMap)) {
        prevHashMap[element] = (prevHashMap[element] ?? 0) + count * product;
      }
      currentHashMap = prevHashMap;
    } else if (/^[A-Za-z]+$/.test(formula[i])) {
      let element = formula[i];
      let count = 0;
      i++;
      // parsing element
      while (
        i < formula.length &&
        /^[A-Za-z]+$/.test(formula[i]) &&
        isLowerCase2(formula[i])
      ) {
        element += formula[i++];
      }

      // parsing number after the element
      while (i < formula.length && formula[i] >= "0" && formula[i] <= "9") {
        count = count * 10 + parseFloat(formula[i++]);
      }
      i--;
      currentHashMap[element] =
        (currentHashMap[element] ?? 0) + (count === 0 ? 1 : count);
    }
  }
  // Sorting the string to output in ascending order

  let str = "";

  for (let [element, count] of Object.entries(currentHashMap).sort()) {
    if (count === 1) {
      str += element;
    } else {
      str += element + String(count);
    }
  }
  return str;
};

const isLowerCase2 = (str: string) => str === str.toLowerCase();
console.log(countOfAtoms2("(NB3)33"));
