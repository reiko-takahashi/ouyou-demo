import L from 'leaflet';

export default class Map {
  constructor() {
    this.map = {};
    this.init();
  }

  init() {
    // map要素が無い場合は地図画面ではない
    if (!$("#map")) {
      console.log("this page is not map page");
      return;
    }

    let std = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    let chiriin = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
      attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>"
    });

    let clouds = L.tileLayer('http://tile.openweathermap.org/map/{clouds_new}/{z}/{x}/{y}.png?appid={f6fe2a620a1fc01a364af8e70b3c99c1}',{
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    let precipation = L.tileLayer('http://tile.openweathermap.org/map/{clouds_new}/{z}/{x}/{y}.png?appid={f6fe2a620a1fc01a364af8e70b3c99c1}',{
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    let clouds = L.tileLayer('http://tile.openweathermap.org/map/{clouds_new}/{z}/{x}/{y}.png?appid={f6fe2a620a1fc01a364af8e70b3c99c1}',{
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    this.map = L.map("map", {
      center: [37.09, 138.52],
      zoom: 16,
      layers: [std]
    });

    // 主題図レイヤーグループ化
    let baseMaps = {
      "Mapbox(osm)": std,
      "Mapbox(chiriin)": chiriin,
      "Mapbox(clouds)": clouds
    };

    L.control.layers(baseMaps).addTo(this.map);

    // スケールバーを追加
    L.control.scale().addTo(this.map);

    // リサイズ
    this.map.on('resize', () => {
      this.map.invalidateSize();
    });
  }
}
