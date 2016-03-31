module.exports.flip = function (json) {

    function flipGeojson(geojson) {
        var arr = undefined;

        if (geojson && geojson.length === 2) {
            arr = geojson;
        } else if (geojson.coordinates) {
            arr = geojson.coordinates;
        } else {
            arr = geojson.geometry.coordinates;
        }

        if (arr)
            arr.reverse();

        return geojson;
    }

    if (json.type && json.type === "FeatureCollection") {
        for (var i = 0; i < json.features.length; i++) {
            flipGeojson(json.features[i]);
        }
    } else {
        return flipGeojson(json);
    }

    return json;

}
