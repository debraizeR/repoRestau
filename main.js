var map = L.map(
    "map", {
        center: [49.487687, 0.112616],
        crs: L.CRS.EPSG3857,
        zoom: 10,
        zoomControl: true,
        preferCanvas: true,
    } );
     var tile_layer_f08ed29866364a00b570baf489f82975 = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        "attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.",
        "detectRetina": false,
        "maxNativeZoom": 18,
         "maxZoom": 18,
        "minZoom": 0,
        "noWrap": false,
        "opacity": 1,
        "subdomains": "abc",
        "tms": false
     }
 ).addTo(map);

 function initMap() {
    markerClusters = L.markerClusterGroup();
    var marker = L.marker(
        [49.487687, 0.112616]
    );
    marker.bindPopup('<p>31 Rue du Général Faidherbe, 76600 Le Havre<p>');
    markerClusters.addLayer(marker);

    map.addLayer(markerClusters);
}
window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};

document.querySelector('li').addEventListener("click", function (event) {
    var first = document.getElementById('first')
    var second = document.getElementById('second')
    var third = document.getElementById('third')
    if(first.classList.contains('active')){console.log('test');}
})