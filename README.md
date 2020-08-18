# WeatherDashboard
In this Homework,
a. The HTML page->
   1.  contains a navbar (using Bootstrap) with the heading
   2. A left column that contains the search button and the search input textarea followed by the <section> tag that lists the Cities searched from the Local Storage
   3. A right column that displays a box containing the the city name, date, and the weather icon followed by the temperature, the humidity, the wind speed, and the UV index.
   Below the box is the Five Day Forecast displayed using Boostrap Cards with each card containing the date, weather icon, temperature and humidity. 
b. The CSS page->
   1.  contains the colors and styling of the left and right column, the search button, and the forecast cards
c. The JS file ->
   1. jQuery has been primarily used
   2. created variables to store the current date as well as the next five days' date using moment.js
   3. When the page is refreshed, retreiveLocalStorage function is called to get the list of cities from the local storage and display them. If a city is clicked, the weather report of that city as well the 5 day forecast is displayed.
   4. An onclick function gets the city name from the input text area when the search button has been clicked  and calls the getWeatherReport function.
   5. getWeatherReport function takes the cityName as an input and calls 3 different ajax functions- 
   the first ajax function gives the current weather(temperature humidity and wind-speed as well as latitude and longitude)
   Using latitude and longitude from the previous ajax function the second ajax function is called to get the UV index. When the UV index is viewed it is presented with a background color that indicates the UV strength where green is the least and violet the highest. This is done using a series of if else statement
   The third ajax funtion uses the city name to get the weather forecast for the next 5 days.
   6. Next the saveCitySearched function is called that saves the last searched city in the local storage and the displayLastCity function displays the last searched city in the list of cities searched


URL of the Deployed Application : https://sumayyahm.github.io/WeatherDashboard/

![image](https://user-images.githubusercontent.com/66535567/90560839-54455d80-e165-11ea-8098-3e6a52afac68.png)
Screenshot of the Deployed Application


