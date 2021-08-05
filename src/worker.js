console.log("hello from worker");

addEventListener("message", (event) => {
  console.log("worker received a message");

  postMessage(event.data);
});
