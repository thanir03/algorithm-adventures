const restoreIpAddress = (s: string): string[] => {
  const listIpAddress: string[] = [];
  combinations(s, 0, listIpAddress, "");
  return listIpAddress;
};

const combinations = (
  str: string,
  idx: number,
  listIpAddress: string[],
  curStr: string,
  octet: number = 0
) => {
  if (octet === 4 && idx !== str.length) {
    return;
  } else if (octet === 4) {
    listIpAddress.push(curStr.slice(0, -1));
    return;
  }

  for (let i = idx; i < idx + Math.min(str.length - idx, 3); i++) {
    let ip = str.slice(idx, i + 1);
    let curNum = Number(ip);
    if (ip[0] === "0" && ip.length > 1) return;
    if (curNum <= 255) {
      combinations(
        str,
        i + 1,
        listIpAddress,
        curStr + String(curNum) + ".",
        octet + 1
      );
    }
  }
};

restoreIpAddress("25525511135");

// Convert  solution to iterative solution
