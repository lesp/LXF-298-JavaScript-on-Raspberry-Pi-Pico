const led = 0;
pinMode(led, OUTPUT);
setInterval(() => {
  digitalToggle(led);
  console.log("TOGGLE");
}, 1000);
