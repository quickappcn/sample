const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const drawClock = (size, cns, clockd) => {
  cns.clearRect(0, 0, size, size);

  cns.beginPath();
  cns.fillStyle = '#ffffff';
  cns.rect(0, 0, size, size);
  cns.fill();
  cns.closePath();

  if ((clockd.hasOwnProperty('indicate') && clockd.indicate == true) || !clockd.hasOwnProperty('indicate')) {
    indicator(size, cns, clockd);
  }

  if (clockd.hasOwnProperty('timeAdd') && clockd.timeAdd) {
    timeAdd((size / 2), size / 5 * 3, size, cns, clockd);
  }

  if (clockd.hasOwnProperty('dateAdd') && clockd.dateAdd) {
    dateAdd((size / 2), size / 5 * 3 + size / 10, size, cns, clockd);
  }

  const now = new Date();
  const timeOff = (clockd.hasOwnProperty('timeoffset')) ? clockd['timeoffset'] : 0;
  now.setTime(now.getTime() + timeOff * 1000);
  const milisec = now.getMilliseconds();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours() % 12;

  cns.fillStyle = (clockd.hasOwnProperty('dial1Color')) ? clockd['dial1Color'] : '#333333';
  cns.strokeStyle = (clockd.hasOwnProperty('dial1Color')) ? clockd['dial1Color'] : '#333333';
  cns.lineCap = 'round';

  cns.beginPath();
  cns.lineWidth = 1;
  cns.moveTo((size / 2), (size / 2));
  cns.arc((size / 2), (size / 2), size / 3, -1.57 + sec * 0.1046 + milisec / 1000 * 0.1046, -1.569 + sec * 0.1046 + milisec / 1000 * 0.1046, 0);
  cns.stroke();
  cns.closePath();

  cns.beginPath();
  cns.lineWidth = 1;
  cns.moveTo((size / 2), (size / 2));
  cns.arc((size / 2), (size / 2), size / 15, 1.57 + sec * 0.1046 + milisec / 1000 * 0.1046, 1.569 + sec * 0.1046 + milisec / 1000 * 0.1046, 1);
  cns.stroke();
  cns.closePath();

  cns.fillStyle = (clockd.hasOwnProperty('dial2Color')) ? clockd['dial2Color'] : '#333333';
  cns.strokeStyle = (clockd.hasOwnProperty('dial2Color')) ? clockd['dial2Color'] : '#333333';
  cns.lineCap = 'round';

  cns.beginPath();
  cns.lineWidth = 2;
  cns.moveTo((size / 2), (size / 2));
  cns.arc((size / 2), (size / 2), size / 3, -1.57 + min * 0.1046 + sec / 60 * 0.1046, -1.569 + min * 0.1046 + sec / 60 * 0.1046, 0);
  cns.stroke();
  cns.closePath();

  cns.fillStyle = (clockd.hasOwnProperty('dial3Color')) ? clockd['dial3Color'] : '#333333';
  cns.strokeStyle = (clockd.hasOwnProperty('dial3Color')) ? clockd['dial3Color'] : '#333333';
  cns.lineCap = 'round';

  cns.beginPath();
  cns.lineWidth = 3;
  cns.moveTo((size / 2), (size / 2));
  cns.arc((size / 2), (size / 2), size / 4, -1.57 + hour * 0.523 + min / 60 * 0.523, -1.569 + hour * 0.523 + min / 60 * 0.523, 0);
  cns.stroke();
  cns.closePath();

  cns.fillStyle = (clockd.hasOwnProperty('dial1Color')) ? clockd['dial1Color'] : '#333333';
  cns.strokeStyle = (clockd.hasOwnProperty('dial1Color')) ? clockd['dial1Color'] : '#333333';
  cns.lineCap = 'round';

  cns.beginPath();
  cns.lineWidth = 2;
  cns.arc((size / 2), (size / 2), size / 80, 0, 6.28, 0);
  cns.fill();
  cns.closePath();

  clockd.timer = setTimeout(function () {
    drawClock(size, cns, clockd)
  }, 50);
}

const indicator = (size, cns, clockd) => {
  if (clockd.hasOwnProperty('indicateColor')) {
    cns.strokeStyle = clockd['indicateColor'];
  } else {
    cns.strokeStyle = '#333';
  }
  cns.lineWidth = 2;
  let ekstra

  for (let a = 0; a < 12; a++) {
    const r = parseInt(a) * 0.523;
    const calc = Math.cos(r - 1.57);
    const y = Math.sin(r - 1.57);

    if (a % 3 == 0) {
       ekstra = size / 50;
    } else {
       ekstra = 0;
    }
    cns.beginPath();
    cns.moveTo(calc * (size / 3 + ekstra) + (size / 2), y * (size / 3 + ekstra) + (size / 2));
    cns.lineTo(calc * size / 3.25 + (size / 2), y * size / 3.25 + (size / 2));
    cns.stroke();
    cns.fill();
    cns.closePath();
  }
}

const timeAdd = (x, y, size, cns, clockd) => {
  if (!clockd.hasOwnProperty('timeAdd')) {
    return;
  }

  const now = new Date();
  const timeOff = (clockd.hasOwnProperty('timeoffset')) ? clockd['timeoffset'] : 0;
  now.setTime(now.getTime() + timeOff * 1000);
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = (clockd.hasOwnProperty('time24h') && clockd['time24h']) ? now.getHours() : now.getHours() % 12;

  if (hour == 0) {
    hour = 12;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  cns.lineWidth = 1;
  cns.fillStyle = (clockd.hasOwnProperty('timeAddColor') ? clockd['timeAddColor'] : '#333');
  cns.textBaseline = 'middle';
  cns.textAlign = 'center';
  cns.font = size / 15 + 'px Arial';

  switch (parseInt(clockd['timeAdd'])) {
    case 1:
      cns.fillText(hour + ':' + min + ':' + sec, x, y);
      break;
    case 2:
      cns.fillText(hour + ':' + min, x, y);
      break;
    case 3:
      hour = now.getHours();
      if (hour < 10) {
        hour = '0' + hour;
      }
      cns.fillText(hour + ':' + min + ':' + sec, x, y);
      break;
    default:
      hour = now.getHours();
      if (hour < 10) {
        hour = '0' + hour;
      }
      cns.fillText(hour + ':' + min, x, y);
  }
}

const dateAdd = (x, y, size, cns, clockd) => {
  if (!clockd.hasOwnProperty('dateAdd')) {
    return;
  }

  const now = new Date();
  const timeOff = (clockd.hasOwnProperty('timeoffset')) ? clockd['timeoffset'] : 0;
  now.setTime(now.getTime() + timeOff * 1000);
  let day = now.getDate();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;

  if ((month) < 10) {
    month = '0' + (month);
  }
  if (day < 10) {
    day = '0' + day;
  }

  cns.lineWidth = 1;
  cns.fillStyle = clockd['dateAddColor'];
  cns.textBaseline = 'middle';
  cns.textAlign = 'center';
  cns.font = size / 20 + 'px Arial';

  switch (parseInt(clockd['dateAdd'])) {
    case 1:
      cns.fillText(day + '/' + month + '/' + year, x, y);
      break;
    case 2:
      cns.fillText(month + '/' + day + '/' + year, x, y);
      break;
    case 3:
      day = now.getDay();
      cns.fillText(dayArr[day], x, y);
      break;
    case 4:
      month = now.getMonth();
      cns.fillText(monthArr[month] + ' ' + day, x, y);
      break;
    default:
      month = now.getMonth();
      cns.fillText(day + ' ' + monthArr[month], x, y);
  }
}

export const drawLogo = ctx => {
  const r = 20;
  const h = 300;
  const p = Math.PI;
  const s = 40;

  ctx.beginPath();
  ctx.moveTo(h / 2 + s, h / 2);
  ctx.arc(h / 2, h / 2, s, 0, -p / 2 * 3, true);
  ctx.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false);
  ctx.arc(h / 2, h / 2, s * 2, -p / 2 * 3, 0, false);
  ctx.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false);
  ctx.fillStyle = '#4285f5';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(h / 2 + s * 2, h / 2 + s + s / 2);
  ctx.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false);
  ctx.fillStyle = '#e94335'
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(h / 2 + s / 4 * 3, h / 2 + s / 2);
  ctx.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false);
  ctx.fillStyle = '#f9bc05'
  ctx.fill();
}

export const drawGradientLogo = ctx => {
  const r = 20
  const h = 380
  const p = Math.PI

  const linGrad1 = ctx.createLinearGradient(h, h, 0, 0)
  linGrad1.addColorStop(0, '#FFFAFA')
  linGrad1.addColorStop(0.8, '#E4C700')
  linGrad1.addColorStop(1, 'rgba(228,199,0,0)')

  ctx.fillStyle = linGrad1
  ctx.fillRect(0, 0, h, h)

  const linGrad2 = ctx.createLinearGradient(0, 0, h, h)
  linGrad2.addColorStop(0, '#C1FFC1')
  linGrad2.addColorStop(0.5, '#ffffff')
  linGrad2.addColorStop(1, '#00BFFF')

  ctx.beginPath()
  ctx.moveTo(r * 2, r)
  ctx.arc(r * 2, r * 2, r, -p / 2, -p, true)
  ctx.lineTo(r, h - r * 2)
  ctx.arc(r * 2, h - r * 2, r, p, p / 2, true)
  ctx.lineTo(h - r * 2, h - r);
  ctx.arc(h - r * 2, h - r * 2, r, p / 2, 0, true)
  ctx.lineTo(h - r, r * 2)
  ctx.arc(h - r * 2, r * 2, r, 0, -p / 2, true)
  ctx.closePath()
  ctx.lineWidth = 10
  ctx.strokeStyle = linGrad2
  ctx.stroke()

  const s = 60

  ctx.beginPath()
  ctx.moveTo(h / 2 + s, h / 2)
  ctx.arc(h / 2, h / 2, s, 0, -p / 2 * 3, true)
  ctx.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false)
  ctx.arc(h / 2, h / 2, s * 2, -p / 2 * 3, 0, false)
  ctx.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false)
  ctx.fillStyle = '#4286f5'
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(h / 2 + s * 2, h / 2 + s + s / 2)
  ctx.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false)
  ctx.fillStyle = 'rgb(234, 67, 53)'
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(h / 2 + s / 4 * 3, h / 2 + s / 2)
  ctx.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false)
  ctx.fillStyle = 'rgba(250, 188, 5, 1)'
  ctx.fill()
}

export const grayFilter = ctx => {
  const canvasW = 380
  const canvasH = 380

  // 得到场景像素数据
  const imageData = ctx.getImageData(0, 0, canvasW, canvasH)
  const data = imageData.data

  const grayscale = () => {
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3

      data[i] = avg // red
      data[i + 1] = avg // green
      data[i + 2] = avg // blue
    }

    // 在场景中写入像素数据
    ctx.putImageData(imageData, 0, 0)
  }

  grayscale()
}