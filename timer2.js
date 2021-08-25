let stdin = process.stdin;
let instructions = `\n1. Press b for an immediate beep,\n2. Input any number from 1 to 9 for an alarm in 'x' amount of seconds\n3. Hit ctrl+c to exit the program\n`;
let regex = /[1-9]/;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

process.stdout.write("How to set an alarm: " + instructions);

stdin.on('data', (key) => {
// ctrl-c ( end of text )
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === '\u0062') {
    process.stdout.write('\x07');
  }

  if (key.match(regex)) {
    process.stdout.write(`\nsetting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});