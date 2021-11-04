window.onload = function() {
  document.body.innerHTML = "<canvas width=500 height=150 id='canvas'>";
  var c = canvas.getContext('2d');
  setInterval(draw, 50);
}

function() draw {
  drawRect('blue', 50, 50, 30, 45);

  c.fillStyle = 'blue';
  c.fillRect(50, 50, 30, 45);
}
function() drawRect(color, X, Y, width, height) {
  c.fillStyle = color;
  c.fillRect(X, Y, width, height);
}
