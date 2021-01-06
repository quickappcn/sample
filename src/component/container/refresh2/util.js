export const getCurrentTime = () => {
  var time = new Date()
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()

  var h = time.getHours()
  var minutes = time.getMinutes()
  var seconds = time.getSeconds()

  return y + '-' + m + '-' + d + ' ' + h + ':' + minutes + ':' + seconds
}

export const colorList = ['#7D7DFF', '#46A3FF', '#4DFFFF', '#4EFEB3', '#53FF53', '#d0d0d0', '#ff7575', '#ffaad5', '#ffa6ff', '#d3a4ff']
