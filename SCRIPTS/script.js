'use strict';

require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/LayerList",
    "esri/widgets/DistanceMeasurement2D",
    "esri/widgets/Search",
], function (esriConfig, WebMap, MapView, ScaleBar, Legend, BasemapGallery, Expand, LayerList, DistanceMeasurement2D, Search) {

    esriConfig.apiKey = "AAPKb3392f1605744b938328349d8bbcc26aYzDBpljmCG_A187wY3SjiBZyWhphttQP1yLgvIjXQAabtCHZh-Pmpg1DTRnq4eQ6"

    let link1 = document.getElementById("link1");
    let link2 = document.getElementById("link2");
    let link3 = document.getElementById("link3");
    let link4 = document.getElementById("link4");


    const webMap = new WebMap({
        portalItem: {
            id: "608b31a322b64a1197ce83e7e778d742"
        }
    });

    const view = new MapView({
        container: "map",
        map: webMap,
        zoom: 4,
    });

    // Widgety

    const legend = new Legend({
        view: view
    })

    const scalebar = new ScaleBar({
        view: view
    });

    const bmWg = new BasemapGallery({
        view: view
    });

    const expandWg = new Expand({
        view: view,
        content: bmWg
    });

    const expandLg = new Expand({
        view: view,
        content: legend
    });

    const searchWidget = new Search({
        view: view
    });

    const layerList = new LayerList({
        view:view
    });

    let measurement = new DistanceMeasurement2D({
        view: view
    });

    view.ui.add(measurement, "top-right");
    
    view.ui.add(expandLg, "bottom-left");

    view.ui.add(scalebar, "bottom-left")

    view.ui.add(searchWidget, {
        position: "bottom-right"
    });

    view.ui.add(layerList, {
        position: "top-trailing"
    });

    view.ui.add(expandWg, {
        position: "top-right"
    });


    link1.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [ 2.3653, 48.8657 ]
        view.zoom = 9
    });

    link2.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [ 2.8237, 41.9853]
        view.zoom = 9
    });

    link3.addEventListener("click", function(event) {
        event.preventDefault();
        view.center= [ 4.8563, 46.7280 ]
        view.zoom = 9
    });

    link4.addEventListener("click", function(event) {
        event.preventDefault();
        view.center = [ 6.9150, 45.8638 ]
        view.zoom = 9
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