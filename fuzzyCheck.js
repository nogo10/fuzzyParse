console.log(fuzzyCheck("parlycloudy","wi-day-cloudy"));

function fuzzyCheck(inst1,inst2){
   var score = 0;
   inst1= inst1.toLowerCase();
   inst2= inst2.toLowerCase();
   
   //split into arrays 
   var arr1= inst1.split("");
   var arr2= inst2.split("");
    for (var i = 0; i < arr1.length; i++) {
      for (var ii = 0; ii < arr2.length; ii++) {
        if (arr1[i] === arr2[ii]){
          score++;
        }
      }

    } return score;
}