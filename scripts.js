//Set USGS map1, view and zoom
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-122.44, 47.22], // starting position [lng, lat]
    zoom: 8 // starting zoom
    }).addTo(map);

    //On map load, run function to load the geojson
    map.on('load', function(){
      //add a source layer for earthquakes
      map.addSource('earthquakes', {
            "type": "geojson",
            "data": "https://earthquake.usgs.…summary/1.0_week.geojson"
        });
        //add the earthquakes to the map
        map.addLayer({
          "id":"equakes",
          "type":"circle",
          "source":"earthquakes"
        });

//create popups with magnitude/location/url
  map.on('click', 'equake', function (e) {
        //1. Set the Magnitude in the popup
        var magnitude = "<p>Magnitude: " +e.features[0].properties.mag;
        //2. Set location in popup
        var location = "<p>Location: " + e.features[0].geometry.coordinates;
        //3. Set url in popup
        var url = "<p>More info: " +e.features[0].properties.url;
        //3. make the popup
        new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(magnitude)
                .setHTML(location)
                .setHTML(url)
                .addTo(map1)
        });



      // var map2 = L.map('map').setView([47.3255, -122.4416], 13);
      // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //   maxZoom: 15,
      //   id: 'mapbox.streets',
      //   accessToken: 'pk.eyJ1IjoiY3JhZnR5a2VpdGgiLCJhIjoiY2poYXQxeWtpMDRwcDM3cnoxc213NzFzcSJ9.DKC2Wj-iDP_ARDtUElmXnw'
      //   }).addTo(map);
