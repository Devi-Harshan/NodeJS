import { EventEmitter } from "events";

const myEmitter = new EventEmitter();
function greetHandler(name) {
  console.log("Hello ", name);
}
function goodByeHandler() {
  console.log("Good bye World");
}

//register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodByeHandler);

//Emit some events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye");

//Error Events handling
myEmitter.on("error", (err) => console.log("Error Occurred", err));
myEmitter.emit("error", new Error("Something went wrong"));
