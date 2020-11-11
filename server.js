function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Travis CI containers rule!');
    await sleep(5000);
  }
}

main();
