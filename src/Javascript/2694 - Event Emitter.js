class EventEmitter {
  subscribedEvents = {};
  // use hashmap for O(1) retrival of element and the key is a array of cn functions
  subscribe(event, cb = null) {
    if (event in this.subscribedEvents) {
      this.subscribedEvents[event].push(cb ?? null);
    } else {
      this.subscribedEvents[event] = [cb ?? null];
    }
    return {
      unsubscribe: () => {
        this.subscribedEvents[event] = this.subscribedEvents[event].filter(
          (cbEvent) => cbEvent !== cb
        );
      },
    };
  }

  emit(event, args = []) {
    const result = [];
    if (!(event in this.subscribedEvents)) return result;
    for (let cb of this.subscribedEvents[event]) {
      if (cb) {
        result.push(cb(...args));
      }
    }
    return result;
  }
}

const eventEmitter = new EventEmitter();
const event1 = eventEmitter.subscribe("firstEvent", function (...args) {
  return args.join(",");
});

const { unsubscribe } = event1;

console.log(eventEmitter.emit("firstEvent", [1, 2, 3]));
unsubscribe();
console.log(eventEmitter.emit("firstEvent", [4, 5, 6]));
