    // Get the required elements
    const playButton = document.getElementById('button02');
    const messageElement = document.getElementById('manu');
    const coinImage = document.getElementById('coin');
    var newSound = new Audio("manu01.mp3");

    // Add event listener to the play button
    playButton.addEventListener('click', function () {
      // Check if either h01 or h02 is selected
      const h01Selected = document.querySelector('.h01').classList.contains('selected');
      const h02Selected = document.querySelector('.h02').classList.contains('selected');

      if (!h01Selected && !h02Selected) {
        // If neither option is selected, show the message
        messageElement.textContent = 'Select Heads or Tails Option';
        messageElement.style.color = '#fff';
      } else {
        // If either option is selected, perform the animation
        coinImage.classList.add('flipped', 'move-animation');
        newSound.play();

        // Wait for the animation to complete and show the result
        setTimeout(function () {
          const randomNumber = Math.random(); // Generate a random number
          const result = randomNumber < 0.5 ? 'head' : 'tail'; // Assign 'head' or 'tail' based on the random number

          // Update the coin image source based on the result
          coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

          // Check if the user won or lost
          if ((result === 'head' && h01Selected) || (result === 'tail' && h02Selected)) {
            messageElement.textContent = 'Congratulations! You won!';
            messageElement.style.color = 'green';
          } else {
            messageElement.textContent = 'Sorry! You lose!';
            messageElement.style.color = 'red';
          }

          // Remove the animation classes after the animation is completed
          setTimeout(function () {
            coinImage.classList.remove('flipped', 'move-animation');
          }, 1000); // Change the delay time (in milliseconds) as needed
        }, 1000); // Change the delay time (in milliseconds) as needed
      }
    });

    // Add event listeners to the h01 and h02 elements for selection
    const h01Element = document.querySelector('.h01');
    const h02Element = document.querySelector('.h02');

    h01Element.addEventListener('click', function () {
      // Add or remove the selected class when clicked
      h01Element.classList.toggle('selected');
      h02Element.classList.remove('selected');
      // Clear previous result and coin image
      messageElement.textContent = '';
      messageElement.style.color = '';
      coinImage.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png';
    });

    h02Element.addEventListener('click', function () {
      // Add or remove the selected class when clicked
      h02Element.classList.toggle('selected');
      h01Element.classList.remove('selected');
      // Clear previous result and coin image
      messageElement.textContent = '';
      messageElement.style.color = '';
      coinImage.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png';
    });