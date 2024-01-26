
  const words = {
    kuhnalenna: ['Kitchen', 'Living Room', 'Bathrooms'],
    kuhlina: ['Living Room', 'Bathrooms', 'Kitchen'],
    kuhrill: ['Bathrooms', 'Kitchen', 'Living Room']
  };

  function rotateWords() {
    for (const rowId in words) {
      const element = document.getElementById(rowId);
      const currentWord = element.innerHTML;
      const index = words[rowId].indexOf(currentWord);
      const nextIndex = (index + 1) % words[rowId].length;
      element.innerHTML = words[rowId][nextIndex];
    }
  }

  // Set the interval to run every week (604800000 milliseconds in a week)
  setInterval(rotateWords, 2000);



   // Get the audio element
   var audio = document.getElementById("Audio");

   // Set the volume (0.0 to 1.0)
   audio.volume = 0.1; // Adjust this value as needed


   





 

   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var audio = document.getElementById("CowAudio1");

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        audio.volume = 0.1; // Set the volume before playing
        audio.play();

        // Automatically uncheck the checkbox after 5 seconds
        setTimeout(function() {
          checkbox.checked = false;
          audio.pause();
          audio.currentTime = 0;
        }, 5000); // 5000 milliseconds = 5 seconds
      }
    });
  });






  

