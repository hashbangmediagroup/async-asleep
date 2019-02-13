function asleep(time_ms) {
  return new Promise(
    resolve => {
      setTimeout(resolve, time_ms);
    }
  );
}

module.exports = asleep;
// export default asleep;
