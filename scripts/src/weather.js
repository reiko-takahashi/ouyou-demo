export default class Weather{
  constructor(){
    // メンバ変数にcityがつくってある
    this.city = "tokyo";
  }
  // 情報をとってくるところ
  send(){
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
    this.city +
    '&APPID=f6fe2a620a1fc01a364af8e70b3c99c1';

    $.ajax({
      url: url
    // 第1引数の関数が接続成功したときに処理をする
    }).then((json) => {
      console.log(json);
    }, (err) => {
      console.log(err);
    });
  }
}
