var map = L.map('map').setView([36.9685,-86.4808], 8);

 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);



$.getJSON('https://raw.githubusercontent.com/kgollwitzer/dump/main/BRADD_Tornado_Events_from_1950-2021%20(1).json'
,function(data){
  var TornadoIcon = L.icon({
    iconUrl: 'https://cdn.imgbin.com/1/12/23/imgbin-tornado-large-tornado-rrDrDV29TeeQ292A5Dk9jj1mf.jpg',
    iconSize: [20,20]
  }); 
  L.geoJson(data  ,{
  pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: TornadoIcon});
    }, 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>Level: '+feature.properties.mag+'</h1><p>Location: '+feature.properties.place+'</p>');
  }
  }  ).addTo(map);

});

 
$.getJSON('https://raw.githubusercontent.com/kgollwitzer/dump/main/BRADD_Tornado_Events_from_1950-2021.json' 
,function(data){
  var myStyle = {
    "color": "#D5392F",
    "weight": 3,
    "opacity": 0.80 
  };
    L.geoJson(data, { style: myStyle}).addTo(map);
});