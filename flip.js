module.exports.flip = function (json) {

    function flipGeojson(coordinates) {

        if (coordinates && coordinates.length === 2 && typeof coordinates[0] === 'number') {
            coordinates.reverse();
        } else {
            for (var p = 0; p < coordinates.length; p++) {
                var coordinate = coordinates[p]

                if (coordinate && coordinate.length === 2 && typeof coordinate[0] === 'number') {
                    coordinate.reverse();
                } else {
                    for (var f = 0; f < coordinate.length; f++) {
                        coordinate[f].reverse();
                    }
                }
            }
        }
    }

    if (json.type && json.type === "FeatureCollection") {
        for (var i = 0; i < json.features.length; i++) {
            flipGeojson(json.features[i].geometry.coordinates);
        }
    } else {
        flipGeojson(json.geometry.coordinates);
    }

    return json;

}
