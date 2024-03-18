const EventEmmiter = require("events");

const customEmmiter = new EventEmmiter();

customEmmiter.on("response", (name, id) => {
  console.log(`Data received user ${name} with ${id}`);
});

customEmmiter.on("response", () => {
    console.log("Some other logic");
});

customEmmiter.emit("response", "Lian", "28");
