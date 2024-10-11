// OpenLayers haritasını oluşturma
var map = new ol.Map({
    target: 'map', // Haritayı map ID'sine sahip div'e yerleştir
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // OpenStreetMap katmanı
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([29.0569, 41.0151]), // İstanbul koordinatları
        zoom: 10
    })
});
