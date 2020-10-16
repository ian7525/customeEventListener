console.log("Hello world!");

const myEventListener = require("./customEventListener");

const listenerCallback = (data) => {
  console.log(`Emit data: ${data}`);
};

const listener = new myEventListener();
listener.on("testEvent", listenerCallback);
listener.emit("testEvent", "Hi");
// listener.emit("fakeEvent");
listener.removeListener("testEvent", listenerCallback);
listener.emit("testEvent", "Hi");
