$(function () {
    var map = L.map('map').setView([0, 0], 3);

    // add the cartodb layer
    var layerUrl = 'http://rossc1.cartodb.com/api/v2/viz/d2e24b06-c3c8-11e3-bed4-0e230854a1cb/viz.json';
    cartodb
        .createLayer(map, layerUrl)
        .addTo(map);    
});