console.log("Hello world!");

// const myEventListener = require("./customEventListener");

const listenerCallback = (data) => {
  console.log(`Emit data: ${data}`);
};

// const listener = new myEventListener();
// listener.on("testEvent", listenerCallback);
// listener.emit("testEvent", "Hi");
// // listener.emit("fakeEvent");
// listener.removeListener("testEvent", listenerCallback);
// listener.emit("testEvent", "Hi");

const myEventListenerHook = require("./customEventListenerHook");
const listenerHook = myEventListenerHook();
listenerHook.on("testEvent", listenerCallback);
listenerHook.emit("testEvent", "Hi");
// listener.emit("fakeEvent");
listenerHook.removeListener("testEvent", listenerCallback);
listenerHook.emit("testEvent", "Hi");
