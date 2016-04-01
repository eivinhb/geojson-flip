var module = require("../flip.js");

describe("FeatureCollection:", function () {

    var collection;

    beforeEach(function () {
        collection = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [125.6, 10.1]
                    },
                    "properties": {}
                }
            ]
        }
    });

    it("should find feature in FeatureCollection", function () {

        expect(module.flip(collection).features[0].geometry.coordinates).toEqual([10.1, 125.6]);

    })

    it("should find all features in FeatureCollection", function () {

        collection.features.push({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [125.6, 11.1]
            },
            "properties": {}
        });

        var flipped = module.flip(collection);

        expect(flipped.features[0].geometry.coordinates).toEqual([10.1, 125.6]);
        expect(flipped.features[1].geometry.coordinates).toEqual([11.1, 125.6]);
    })
});

describe("Point feature:", function () {

    var feature;

    beforeEach(function () {
        feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [125.6, 10.1]
            },
            "properties": {}
        };
    })

    it("should flip from root", function () {

        expect(module.flip(feature).geometry.coordinates).toEqual([10.1, 125.6]);

    })
});

describe("MultiPoint feature:", function () {

    var feature;

    beforeEach(function () {
        feature = {
            "type": "Feature",
            "geometry": {
                "type": "MultiPoint",
                "coordinates": [[125.6, 10.1], [125.6, 11.1]]
            },
            "properties": {}
        };
    })

    it("should flip from root", function () {

        expect(module.flip(feature).geometry.coordinates).toEqual([[10.1, 125.6], [11.1, 125.6]]);

    })
});