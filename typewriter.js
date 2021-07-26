const sentence = "hello there from lighthouse labs\n";

let intervalTime = 1000;

for (const char of sentence) {
  intervalTime += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, intervalTime)
}
