function timerGenerator() {
  const time = new Date().toLocaleString()

  console.log(`TIME: ${time}`)

  return time
}

export default timerGenerator