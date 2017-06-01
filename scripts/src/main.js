// weatherファイルを使えるようにする
import Weather from "./weather";

$(function() {
  let weather = new Weather();
  // 検索ボタンを押したとき
  $('#search-city').click(() => {
    let newCity = $('#input-city').val();
    weather.city = newCity;
    $("#city-name").text(weather.city);
    weather.send();
  });

  // weather.jsからtokyoを呼び出す
  $("#city-name").text(weather.city);
});
