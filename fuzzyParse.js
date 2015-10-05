

//weather icons name c.s.v 

  var weatherIcons = "wi-day-sunny,wi-day-cloudy,wi-day-cloudy-gusts,wi-day-cloudy-windy,wi-day-fog,wi-day-hail,wi-day-haze,wi-day-lightning,wi-day-rain,wi-day-rain-mix,wi-day-rain-wind,wi-day-showers,wi-day-sleet,wi-day-sleet-storm,wi-day-snow,wi-day-snow-thunderstorm,wi-day-snow-wind,wi-day-sprinkle,wi-day-storm-showers,wi-day-sunny-overcast,wi-day-thunderstorm,wi-day-windy,wi-hot,wi-day-cloudy-high, wi-day-light-wind, wi-cloud, wi-cloudy,wi-cloudy-gusts, wi-cloudy-windy, wi-fog, wi-hail, wi-rain, wi-rain-mix, wi-rain-wind, wi-showers, wi-sleet, wi-snow, wi-sprinkle, wi-storm-showers, wi-thunderstorm, wi-snow-wind, wi-snow, wi-smog, wi-smoke, wi-lightning, wi-raindrops, wi-raindrop, wi-dust, wi-snowflake-cold, wi-windy, wi-strong-wind, wi-sandstorm, wi-earthquake, wi-fire, wi-flood, wi-meteor, wi-tsunami, wi-volcano, wi-hurricane, wi-tornado, wi-small-craft-advisory, wi-gale-warning, wi-storm-warning, wi-hurricane-warning, wi-wind-direction";
  
console.log(fuzzyParse("partlycloudy",weatherIcons));
  
  
function fuzzyParse(searchTerm,myList) {
  //split string csv -- edit to split parameter to array of words between spaces " " or 
  var arr2 = myList.split(",");
 
  //synonym hacks
  if (searchTerm === "clear") {
    searchTerm = "day-sunny";
  }
    var arr1 = searchTerm.split(" ");
    var result;
    var highest = 0;// highest number of hits
    var weight = [0]; 


    //2d for loop compare each match

    for (var i = 0; i < arr1.length; i++) {
      for (var ii = 0; ii < arr2.length; ii++) {
       
       weight[ii] = fuzzyCheck(arr1[i],arr2[ii]); 
       if (weight[ii]> highest){
         highest= weight[ii];
         
         result = arr2[ii];
       }
       
      }

    } 
    

 function fuzzyCheck(inst1,inst2){
   var score = 0;
   
   
   //split into arrays 
   var arr1= inst1.split("");
   var arr2= inst2.split("");
    for (var i = 0; i < arr1.length; i++) {
      for (var ii = 0; ii < arr2.length; ii++) {
        if (arr1[i].toLowerCase() === arr2[ii].toLowerCase()){
          score++;
        }
      }

    } return score - Math.abs(arr1.length-arr2.length);
}

  
return result;

}