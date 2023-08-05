// Underground System

class UndergroundSystem {
  passenger: { [key: number]: [string, number] };
  stationDuration: { [key: string]: number[] };
  constructor() {
    this.passenger = {};
    this.stationDuration = {};
  }
  checkIn(id: number, stationName: string, time: number) {
    this.passenger[`${id}`] = [stationName, time];
  }
  checkOut(id: number, stationName: string, time: number) {
    this.passenger[`${id}`][0] += "-" + stationName;
    if (this.passenger[`${id}`][0] in this.stationDuration) {
      this.stationDuration[this.passenger[`${id}`][0]].push(
        time - this.passenger[`${id}`][1]
      );
    } else {
      this.stationDuration[this.passenger[`${id}`][0]] = [
        time - this.passenger[`${id}`][1],
      ];
    }
    delete this.passenger[`${id}`];
  }

  getAverageTime(startStation: string, endStation: string): number {
    const totalLengthOfDuration =
      this.stationDuration[`${startStation}-${endStation}`];
    const sum = totalLengthOfDuration.reduce((acc, curr) => acc + curr, 0);
    return sum / totalLengthOfDuration.length;
  }
}

// Time complexity : O(n)
// Space complexity : O(n) where n is the number of start station and end stations
