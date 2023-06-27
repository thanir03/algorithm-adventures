// Given the interval of two employee meeting schedule , find the available time to set meeting for both of them

// SubProblems
// Process the string time into number
// Find the available time schedule
// With both available time schedule , find the overlapping time schedule

// SOLUTION 1 : FIND OVERLAPPING FREE TIME GAP

// Time Complexity : O(n + m) where n is length of calendar 1 and m is length of calendar 2
// Space Complexity : O(n + m)

const calendarMatching = (
  calendar1: string[][],
  calendar2: string[][],
  dailyBounds1: string[],
  dailyBounds2: string[],
  meetingDuration: number
) => {
  const cal1 = processCalendarToNumber(calendar1); //O(n)
  const cal2 = processCalendarToNumber(calendar2); // O(m)
  const db1 = processTimeToNumber(dailyBounds1); // O(1)
  const db2 = processTimeToNumber(dailyBounds2); // O(1)
  const avail1 = findAvailableTimeGap(cal1, db1); // O(n)
  const avail2 = findAvailableTimeGap(cal2, db2); // O(m)
  const overlappingCal = findOverlappingTime(avail1, avail2, meetingDuration); // O(n + m)
  const overlappingCalInString = processCalendarToString(overlappingCal);
  console.log(overlappingCalInString); // O(n)
  return overlappingCalInString;
};

const findOverlappingTime = (
  avail1: number[][],
  avail2: number[][],
  meetingDuration: number
): number[][] => {
  // Time Complexity : O(m + n)
  // Space Complexity : O(m + n)
  const overlap: number[][] = [];
  let [i, j] = [0, 0];
  while (i < avail1.length && j < avail2.length) {
    let [start1, end1] = avail1[i];
    let [start2, end2] = avail2[j];
    if (
      (start1 >= start2 && start1 < end2) ||
      (start2 >= start1 && start2 <= end2)
    ) {
      const start = Math.max(start1, start2);
      const end = Math.min(end1, end2);
      if (end - start >= meetingDuration) {
        overlap.push([start, end]);
      }
    }
    if (end1 > end2) {
      j++;
    } else {
      i++;
    }
  }
  return overlap;
};

const processCalendarToString = (calendar: number[][]): string[][] => {
  // Time Complexity : O(n) where n is the size of the calendar
  // Space Complexity : O(n) where n is the size of the calendar
  const processedCalendar: string[][] = [];
  for (let time of calendar) {
    processedCalendar.push(processTimeToString(time));
  }
  return processedCalendar;
};

const processTimeToString = (time: number[]): string[] => {
  // Time Complexity : O(1) because the size of the array is always 2
  //  Space Complexity : O(1) because the size of the array is always 2
  const processedTime: string[] = [];
  for (let num of time) {
    const hour = Math.floor(num / 60);
    const minute = num - hour * 60;
    processedTime.push(`${hour}:${minute < 10 ? "0" + minute : minute}`);
  }
  return processedTime;
};

const processCalendarToNumber = (calendar: string[][]): number[][] => {
  // Time Complexity : O(n) where n is the size of the calendar
  // Space Complexity : O(n) where n is the size of the calendar
  const processedCalendar: number[][] = [];
  for (let time of calendar) {
    processedCalendar.push(processTimeToNumber(time));
  }
  return processedCalendar;
};

const processTimeToNumber = (time: string[]): number[] => {
  // Time Complexity : O(1) because the size of the array is always 2
  //  Space Complexity : O(1) because the size of the array is always 2
  const processedTime: number[] = [];
  for (let str of time) {
    const [hour, minute] = str.split(":");
    const time = Number(hour) * 60 + Number(minute);
    processedTime.push(time);
  }
  return processedTime;
};

const findAvailableTimeGap = (cal: number[][], db: number[]): number[][] => {
  // Time Complexity : O(n) where n is the size of the array
  // Space Complexity : O(n) where n is the size of the arrays
  const available: number[][] = [];
  if (cal.length === 0) {
    available.push(db);
    return available;
  }
  const [start, end] = db;
  if (start < cal[0][0]) {
    available.push([start, cal[0][0]]);
  }

  for (let i = 1; i < cal.length; i++) {
    if (cal[i][0] > cal[i - 1][1]) {
      available.push([cal[i - 1][1], cal[i][0]]);
    }
  }
  if (end > cal[cal.length - 1][1]) {
    available.push([cal[cal.length - 1][1], end]);
  }

  return available;
};

const testCase = {
  calendar1: [
    ["10:00", "10:30"],
    ["10:45", "11:15"],
    ["11:30", "13:00"],
    ["14:15", "16:00"],
    ["16:00", "18:00"],
  ],
  calendar2: [
    ["10:00", "11:00"],
    ["10:30", "20:30"],
  ],
  dailyBounds1: ["9:30", "20:00"],
  dailyBounds2: ["9:00", "22:30"],
  meetingDuration: 60,
};
// Solution2  : FIND OVERLAPPING MEETING SCHEDULE

const calendarMatching2 = (
  calendar1: string[][],
  calendar2: string[][],
  dailyBounds1: string[],
  dailyBounds2: string[],
  meetingDuration: number
) => {
  const cal1 = processCalendarToNumber(calendar1);
  const cal2 = processCalendarToNumber(calendar2);
  const db1 = processTimeToNumber(dailyBounds1);
  const db2 = processTimeToNumber(dailyBounds2);
  cal1.unshift([0, db1[0]]);
  cal1.push([db1[1], 1439]);
  cal2.unshift([0, db2[0]]);
  cal2.push([db2[1], 1439]);
  const mergedCalendar = mergeTwoCalendars(cal1, cal2);
  const mergedOverlappingRange = mergeOverlappingRange(mergedCalendar);
  console.log(processCalendarToString(mergedOverlappingRange));
  const availableTime = findAvailableTime(
    mergedOverlappingRange,
    meetingDuration
  );
  return processCalendarToString(availableTime);
};

const mergeTwoCalendars = (cal1: number[][], cal2: number[][]) => {
  let [i, j] = [0, 0];
  const mergedCal: number[][] = [];
  while (i < cal1.length && j < cal2.length) {
    if (cal1[i][0] < cal2[j][0]) {
      mergedCal.push(cal1[i]);
      i++;
    } else {
      mergedCal.push(cal2[j]);
      j++;
    }
  }
  while (i < cal1.length) {
    mergedCal.push(cal1[i]);
    i++;
  }
  while (j < cal2.length) {
    mergedCal.push(cal2[j]);
    j++;
  }
  return mergedCal;
};

const mergeOverlappingRange = (calendar: number[][]) => {
  const overlapRange: number[][] = [calendar[0]];
  for (let i = 1; i < calendar.length; i++) {
    if (
      calendar[i][0] >= overlapRange[overlapRange.length - 1][0] &&
      calendar[i][0] <= overlapRange[overlapRange.length - 1][1]
    ) {
      const [start, end] = overlapRange.pop()!;
      overlapRange.push([
        Math.min(start, calendar[i][0]),
        Math.max(calendar[i][1], end),
      ]);
    } else {
      if (calendar[i]) {
        overlapRange.push(calendar[i]);
      }
    }
  }
  return overlapRange;
};

const findAvailableTime = (calendar: number[][], meetingDuration: number) => {
  const availableTime: number[][] = [];
  for (let i = 1; i < calendar.length; i++) {
    const start = calendar[i - 1][1];
    const end = calendar[i][0];
    if (end - start >= meetingDuration) availableTime.push([start, end]);
  }
  return availableTime;
};

console.log(
  calendarMatching2(
    testCase.calendar1,
    testCase.calendar2,
    testCase.dailyBounds1,
    testCase.dailyBounds2,
    testCase.meetingDuration
  )
);
