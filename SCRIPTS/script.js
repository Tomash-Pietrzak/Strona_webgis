'use strict';

require(["esri/config","esri/Map", "esri/views/MapView","esri/rest/locator",
"esri/Graphic"], function (esriConfig, Map, MapView, locator, Graphic) {
    esriConfig.apiKey = "AAPKb3392f1605744b938328349d8bbcc26aYzDBpljmCG_A187wY3SjiBZyWhphttQP1yLgvIjXQAabtCHZh-Pmpg1DTRnq4eQ6"
    
    const map = new Map({
        basemap: "arcgis-navigation"
    });

    const view = new MapView({
        container: "map",
        map: map,
        center: [4.8572, 46.7268], //Longitude, latitude
        zoom: 13
    });


});

let links = document.getElementById("links");
let banner = document.getElementById("banner");
let header = document.getElementById("header");
let arrow = document.getElementById("scroll-to-links");

let scrollingHeight = banner.scrollHeight + header.scrollHeight;


arrow.addEventListener('click', () => window.scrollTo({
    top: scrollingHeight,
    behavior: 'smooth',
}));


function arrowFade() {
    if (window.scrollY <= 5) {
        arrow.style.display = "block";
    } else {
        arrow.style.display = "none";
    }
    setTimeout(arrowFade, 100)
}

setTimeout(arrowFade, 100)