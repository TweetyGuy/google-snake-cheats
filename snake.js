window.onload = function() {
  canvas = document.createElement('gameCanvas');
  c = canvas.getContext('2d');
  setInterval(draw, 50);
}

function() draw {
  c.fillStyle = color;
  c.fillRect(X, Y, width, height);
}
