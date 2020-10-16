class MyEventListener {
  constructor() {
    this.event = {};
  }

  on(eventName, listener) {
    // console.log("on");
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }

    this.event[eventName].push(listener);
  }

  emit(eventName, data) {
    // console.log("emit");
    if (!this.event[eventName]) {
      throw Error(`No this event name: ${eventName}`);
    }

    const emitListener = (callback) => callback(data);

    this.event[eventName].forEach(emitListener);
  }

  removeListener(eventName, removeListener) {
    // console.log("removeListener");
    if (!this.event[eventName]) {
      throw Error(`No this event name: ${eventName}`);
    }
    const filteredListener = (listener) => listener !== removeListener;
    this.event[eventName] = this.event[eventName].filter(filteredListener);
  }
}

module.exports = MyEventListener;
