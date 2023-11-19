document.addEventListener("DOMContentLoaded", function() {
    
    var labels = document.querySelectorAll('label');
  
    labels.forEach(function(label) {
      label.addEventListener('click', function() {
       
        var targetDiv = document.querySelector('.bg-success');

        targetDiv.style.backgroundColor = getRandomColor();
      });
    });
  
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });