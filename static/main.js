var bouncingInterval;

function toggleRainbow() {
    var body = document.body;
    body.classList.toggle('hidden');

    var gifContainer = document.getElementById('gifContainer');
      gifContainer.style.display = 'block';

      // Set initial position randomly
      setPositionRandomly(gifContainer);

      // Start bouncing interval
      bouncingInterval = setInterval(function() {
        bounceAround(gifContainer);
      }, 2000); // Adjust the interval as needed

      // Remove the existing content in the textContainer
      var textContainer = document.getElementById('textContainer');
      textContainer.innerHTML = '';

      // Create and append a new h1 element with the desired text
      var h1Element = document.createElement('h1');
      h1Element.textContent = 'YIPPEE';
      textContainer.appendChild(h1Element);
  }

  function setPositionRandomly(element) {
    var maxX = window.innerWidth - element.clientWidth;
    var maxY = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
  }

  function bounceAround(element) {
    var maxX = window.innerWidth - element.clientWidth;
    var maxY = window.innerHeight - element.clientHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
  }

  function moveButton() {
    var noButton = document.getElementById('no');
      var x = noButton.offsetLeft;
      var y = noButton.offsetTop;

      var maxX = window.innerWidth - x;
      var maxY = window.innerHeight - y;

      var randomX = Math.floor(Math.random() * maxX);
      var randomY = Math.floor(Math.random() * maxY);

      noButton.style.left = randomX + 'px';
      noButton.style.top = randomY + 'px';
  }