window.snake.more_menu = function(e) {
  e = e || 25;
  
  // micro
  let img = new Image;
  img.src = 'https://i.postimg.cc/FHxxLK4m/micro-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);
};
