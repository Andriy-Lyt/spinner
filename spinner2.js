const spinner = (str, delay, numOfSpines) => {
  let line = "";
  let initDelay = delay;
  let SpinCounter = 0;

  while(SpinCounter < numOfSpines) {

    for(let letter of str) {

      setTimeout(() => {
        line = '\r' + letter + '    ';   // console.log("line: ", line);
        process.stdout.write(line);
      }, delay);

      delay += initDelay;               // console.log("delay: ", delay);
    } // for

    SpinCounter++;                      //  console.log("SpinCounter: ", SpinCounter);

  } // while
} // spinner()

//Tests -------
let cursors = "/-\\|";
spinner(cursors, 100, 3);


//Long version -----------------
/* setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 900);
 */