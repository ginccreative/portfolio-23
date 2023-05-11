document.addEventListener('mousemove', function(e) {
  var cursor = document.querySelector('.circle-cursor');
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});