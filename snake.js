window.onload = function() {
  canvas = document.createElement('gameCanvas');
  c = canvas.getContext('2d');
  setInterval(draw, 50);
}

function() draw {
  drawRect('blue', 50, 50, 30, 45);
}
function() drawRect(color, X, Y, width, height) {
  c.fillStyle = color;
  c.fillRect(X, Y, width, height);
}
