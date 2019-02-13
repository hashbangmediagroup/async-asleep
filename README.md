# async-asleep

Javascript has no sleep function. Asleep fixes that.

## quick start

### usage

```javascript
sleep = require('async-asleep');

await sleep(500) // sleep for 500 milliseconds
```

## how does it work

It simply returns a promise that will resolve in a set amount of time. By awaiting the result, you effectively sleep, passing control to other parts of your program in the meantime.

## caveats

Because asleep is asynchronous, it is only useful in an asynchronous context where "await" is available.

I recommend making all code asynchronous, and using the async/await pattern where applicable. Any code that is not asynchronous will not have the ability to use the async/await pattern to synchronize. C'est la vie.

```javascript
async function main() {
  // Put your code in here.
}

main();
```