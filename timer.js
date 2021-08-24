
const timer = () => {

  let args = process.argv.slice(2).filter(el => Number(el) && Number(el) > 0);

  args.map(number => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, number * 1000);
  });
}

timer();