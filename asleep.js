function asleep(time) {
  return new Promise(
    resolve => {
      setTimeout(resolve, ms);
    }
  );
}

module.exports = asleep;
// export default asleep;
