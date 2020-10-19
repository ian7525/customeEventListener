const customEventListenerHook = () => {
  const event = {};

  const on = (eventName, listener) => {
    console.log("Hook on");
    if (!event[eventName]) {
      event[eventName] = [];
    }
    event[eventName].push(listener);
  };

  const emit = (eventName, data) => {
    console.log("Hook emit");
    if (!event[eventName]) {
      throw Error(`Event name not found: ${eventName}`);
    }
    const emitListener = (callback) => callback(data);
    event[eventName].forEach(emitListener);
  };

  const removeListener = (eventName, removeListener) => {
    console.log("Hook removeListener");
    if (!event[eventName]) {
      throw Error(`Event name not found: ${eventName}`);
    }
    const filterListener = (listener) => listener !== removeListener;
    event[eventName] = event[eventName].filter(filterListener);
  };

  return {
    on,
    emit,
    removeListener,
  };
};

module.exports = customEventListenerHook;
