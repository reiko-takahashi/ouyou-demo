// weatherファイルを使えるようにする
import Weather from "./weather";
import Map from "./map";

$(function() {
  let weather = new Weather();
  let map = new Map();
  // 検索ボタンを押したとき
  $('#search-city').click(() => {
    let newCity = $('#input-city').val();
    weather.city = newCity;
    weather.send(newCity);
  });

  //
  weather.send(weather.city)
  
});
