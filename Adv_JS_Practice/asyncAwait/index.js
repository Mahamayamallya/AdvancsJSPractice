// Delaying execution using async/await and setTimeout

async function delayExec() {
  console.log("Start");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("End");
}

delayExec();
