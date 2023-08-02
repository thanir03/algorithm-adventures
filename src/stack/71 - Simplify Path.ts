function simplifyPath(path: string): string {
  let stack: string[] = [];

  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char == "." && path[i + 1] && path[i + 1] === ".") stack.pop();
    else if (char == "/" && path[i + 1] && /[a-zA-Z]/.test(path[i + 1])) {
      stack.push("");
    } else if (/[a-zA-Z]/.test(char)) {
      stack[stack.length - 1] += char;
    }
  }

  let res = "/";
  console.log(stack);
  for (let i = 0; i < stack.length; i++) {
    res += stack[i] + "/";
  }
  if (res.length > 1) res = res.slice(0, -1);
  return res;
}

// Simplify Path 2

const simplifyPath2 = (path: string) => {
  const stack: string[] = [];
  path += "/";
  let cur = "";
  for (let i = 0; i < path.length; i++) {
    if (path[i] == "/") {
      if (cur == "..") stack.length > 0 && stack.pop();
      else if (cur != "" && cur != ".") {
        stack.push(cur);
      }
      cur = "";
    } else {
      cur += path[i];
    }
  }
  const res = "/" + stack.join("/");
  return res;
};

// TIME COMPLEXITY : O(n) because iteration of the string only the entire string
// Space Complexity : O(1) because stack is used

//  Main trick used is to all the values in the current variable
// if the "/" is arrived , we have the entire path
