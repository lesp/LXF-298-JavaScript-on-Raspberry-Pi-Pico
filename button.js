var Button = require('button').Button;
var btn = new Button(1);
const led = 0;
pinMode(led, OUTPUT);
btn.on('click', () => {
  console.log('LED Toggle');
  digitalToggle(led);
});
