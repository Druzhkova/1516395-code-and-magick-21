'use strict';

const cloudWidth = 420;
const cloudHeight = 270;
const cloudX = 100;
const cloudY = 10;
const displacement = 10;
const barMaxHeight = 150;
const barWidth = 40;
const barGap = 50;
const textGap = 25;
const gapLower = 5;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudX + displacement, cloudY + displacement, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudX, cloudY, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', cloudX + textGap, 40);
  ctx.fillText('Список результатов:', cloudX + textGap, 60);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `hsl(240, ${String(Math.round(Math.random() * (100 - 0) + 0))}%, 50%)`;
    }
    ctx.fillRect(cloudX + barGap + (barGap + barWidth) * i, cloudHeight - textGap, barWidth, -(barMaxHeight * times[i]) / maxTime);
    let currentWithBar = (barMaxHeight * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), cloudX + barGap + (barGap + barWidth) * i, cloudHeight - cloudY - textGap - currentWithBar);
    ctx.fillText(names[i], cloudX + barGap + (barGap + barWidth) * i, cloudHeight - gapLower);
  }
};
