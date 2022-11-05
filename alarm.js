const pir = 28;
var pin = 12;
pinMode(pir, INPUT);
setInterval(function () {
  let motion = digitalRead(pir);
  console.log(digitalRead(pir));
  if (motion === 0) {
    for (let i = 0; i < 30; i++) {
      tone(pin, 262); // C4
      delay(100);
      tone(pin, 294); // D4
      delay(100);
      noTone(pin);
}
  } else {
    console.log("No movement")
  }
}, 100);

