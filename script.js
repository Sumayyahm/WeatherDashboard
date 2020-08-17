var dateToday = moment().format('MM-DD-YYYY'); 
var oneDayForward = moment().add(1, 'days').format('MM-DD-YYYY'); 
var twoDaysForward =  moment().add(2, 'days').format('MM-DD-YYYY');
var threeDaysForward =  moment().add(3, 'days').format('MM-DD-YYYY');
var fourDaysFoward =  moment().add(4, 'days').format('MM-DD-YYYY');
var fiveDaysForward =  moment().add(5, 'days').format('MM-DD-YYYY');
 
console.log(dateToday);
console.log(oneDayForward);
console.log(twoDaysForward);
console.log(threeDaysForward);
console.log(fourDaysFoward);
console.log(fiveDaysForward);

$("#btnClick").click(function() {
event.preventDefault();
var city = $("#searchCity").val();
console.log(city);
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=16fd80b6a0c31e142c0590d26368ab29";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    
    console.log(response);
   
    var kTemp = response.main.temp;
    var fTemp =(kTemp-273.15)*1.8 + 32;
    console.log(fTemp + " F")
    var finalTemp = fTemp.toFixed(1);
    console.log(response.main.humidity + "%");
    console.log(response.wind.speed + "MPH");
    console.log(response.coord.lon)
   var lon = response.coord.lon;
    console.log(response.coord.lat)
   var lat = response.coord.lat;
  //  var iconURL = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
   var iconURL = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
  
   $(".boxed").attr("style", "border: 1px solid gray");
   $("#cityDate").text(city + "  " + "("+ dateToday + ")" + "   ");
   $("#weatherIcon").attr("src", iconURL);
   $("#temperature").text("Temperature : " + finalTemp + " °F");
   $("#humidity").text("Humidity : " + response.main.humidity + " %");
   $("#wind-speed").text("Wind Speed : " + response.wind.speed + " MPH");
  


   var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?appid=16fd80b6a0c31e142c0590d26368ab29&lat=" + lat + "&lon=" + lon;

   $.ajax({
       url: queryURLUV,
       method: "GET"
     }).then(function(response) {
       
       console.log(response);
       
       
     
       $("#uv-index").text("UV Index : ");
       var uvIndex = response.value;
       console.log(uvIndex);
      $("#index-value").text(uvIndex);

      if(uvIndex <= 2) {
        $("#index-value").attr("style", "background-color : green");
      }
      else 
      if ((uvIndex > 2)&&(uvIndex < 6)) {
        $("#index-value").attr("style", "background-color : yellow");
      }
      else 
      if ((uvIndex >= 6)&&(uvIndex < 8)) {
        $("#index-value").attr("style", "background-color : orange");
      }
      else
      if ((uvIndex >= 8)&&(uvIndex < 11)) {
        $("#index-value").attr("style", "background-color : red");
      }
      else
      {
        $("#index-value").attr("style", "background-color : violet");
      }


   
   });
});

var queryURLfCast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=16fd80b6a0c31e142c0590d26368ab29";

$.ajax({
    url: queryURLfCast,
    method: "GET"
  }).then(function(response) {
    
    console.log(response);

  $(".card,.forecast").attr("style", "background-color : blue ; border : blue");

  $(".title").text("Five Day Forecast :");
  $(".title").attr("style", "margin-top : 10px ; margin-bottom : 20px");

  $("#oneDayForward").text(oneDayForward);
  $("#weatherIconOne").attr("src", "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png");
  $("#oneDFTemp").text("Temp : " + (((response.list[0].main.temp)-273.15)*1.8 + 32).toFixed(1) + " °F");
  $("#oneDFHum").text("Humidity : " + response.list[0].main.humidity + " %");

  $("#twoDaysForward").text(twoDaysForward);
  $("#weatherIconTwo").attr("src", "http://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png");
  $("#twoDFTemp").text("Temp : " + (((response.list[8].main.temp)-273.15)*1.8 + 32).toFixed(1) + " °F");
  $("#twoDFHum").text("Humidity : " + response.list[8].main.humidity + " %");

  $("#threeDaysForward").text(threeDaysForward);
  $("#weatherIconThree").attr("src", "http://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png");
  $("#threeDFTemp").text("Temp : " + (((response.list[16].main.temp)-273.15)*1.8 + 32).toFixed(1) + " °F")
  $("#threeDFHum").text("Humidity : " + response.list[16].main.humidity + " %");

  $("#fourDaysFoward").text(fourDaysFoward);
  $("#weatherIconFour").attr("src", "http://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png");
  $("#fourDFTemp").text("Temp : " + (((response.list[24].main.temp)-273.15)*1.8 + 32).toFixed(1) + " °F");
  $("#fourDFHum").text("Humidity : " + response.list[24].main.humidity + " %");

  $("#fiveDaysForward").text(fiveDaysForward);
  $("#weatherIconFive").attr("src", "http://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png");
  $("#fiveDFTemp").text("Temp : " + (((response.list[32].main.temp)-273.15)*1.8 + 32).toFixed(1) + " °F");
  $("#fiveDFHum").text("Humidity : " + response.list[32].main.humidity + " %");


});
});
   















