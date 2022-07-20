
var key = '9a9a50edf3901140f2c9c5a4e5091751'; //unique API key provided by 'openweathermap.org'

var baseURL ="https://api.openweathermap.org/data/2.5/weather?q=coimbatore,IN&appid=9a9a50edf3901140f2c9c5a4e5091751"; // API URL

// make a request
var reqestCity = async (city) => 
{
	var baseURL ='https://api.openweathermap.org/data/2.5/weather'
	var query = `?q=${city}&appid=${key}`;

// get response
var response = await fetch(baseURL+query);
    var data = await response.json();
    return data;
} 
