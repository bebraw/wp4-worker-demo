const worker = new Worker("./worker.js", { type: "module" });

worker.onmessage = (event) => {
  console.log("worker says " + event.data);
};
worker.postMessage("hello");

console.log("hello from index");
