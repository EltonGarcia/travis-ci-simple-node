function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const envVar = process.env.TRAVIS_CI_ENV_VAR;
  while(true) {
    console.log('Travis CI containers rule!');
    if (envVar) {
      console.log('Env. variable value is: ' + envVar);
    } else {
      console.log('no env var set');
    }
    await sleep(5000);
  }
}

main();
