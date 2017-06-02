export default class Weather{
  constructor(){
    // メンバ変数にcityがつくってある
    this.city = "tokyo";
  }

  // 天気情報をとってくるところ
  print(json){
    this.city = json.name;
    $("#city-name").text(this.city);
    $('#weather').text(json.weather[0].main);
    $('#icon').html("<img src ='http://openweathermap.org/img/w/" + json.weather[0].icon +".png'>");
    $('#temperature').text(json.main.temp-273 + "℃");
    $('#wind').text(json.wind.speed + "m");
    $('#cloud').text(json.clouds.all + "%");
    $('#pressure').text(json.main.pressure + "hPa");
    $('#humidity').text(json.main.humidity + "%");
    $('#sunrise').text(json.sys.sunrise);
    $('#sunset').text(json.sys.sunset);
    $('#latlon').text(json.coord.lat + " / " + json.coord.lon);

  }

  // 情報をとってくるところ
  send(cityName){
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
    cityName +
    '&APPID=f6fe2a620a1fc01a364af8e70b3c99c1';

    $.ajax({
      url: url
    // 第1引数の関数が接続成功したときに処理をする
    }).then((json) => {
      this.print(json);
      console.log(json);
    }, (err) => {
      console.log(err);
    });
  }
}
