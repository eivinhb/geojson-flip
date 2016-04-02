var flip = require("../flip.js").flip;

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

    it("should flip coordinates in FeatureCollection", function () {

        expect(flip(collection).features[0].geometry.coordinates).toEqual([10.1, 125.6]);

    })

    it("should flip all coordinates in FeatureCollection", function () {

        collection.features.push({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [125.6, 11.1]
            },
            "properties": {}
        });

        var flipped = flip(collection);

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

    it("should flip", function () {

        expect(flip(feature).geometry.coordinates).toEqual([10.1, 125.6]);

    })
});

describe("GeometryCollection:", function () {

    var feature;

    beforeEach(function () {
        feature = {
            "type": "GeometryCollection",
            "geometries": [
                {
                    "type": "Point",
                    "coordinates": [100.0, 0.0]
                },
                {
                    "type": "LineString",
                    "coordinates": [[101.0, 0.0], [102.0, 1.0]]
                }
            ]
        };
    })

    it("should flip coordinates in GeometryCollection", function () {

        var flipped = flip(feature);

        expect(flipped.geometries[0].coordinates).toEqual([0.0, 100.0]);
        expect(flipped.geometries[1].coordinates).toEqual([[0.0, 101.0], [1.0, 102.0]]);

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

    it("should flip", function () {

        expect(flip(feature).geometry.coordinates).toEqual([[10.1, 125.6], [11.1, 125.6]]);

    })
});

describe("Point:", function () {

    var feature;

    beforeEach(function () {
        feature = {"type": "Point", "coordinates": [100.0, 0.0]};
    })

    it("should flip", function () {

        expect(flip(feature).coordinates).toEqual([0.0, 100.0]);

    })
});

describe("LineString:", function () {

    var feature;

    beforeEach(function () {
        feature = {
            "type": "LineString",
            "coordinates": [
                [-101.74, 39.32],
                [-101.55, 39.33]
            ]
        };
    })

    it("should flip", function () {

        expect(flip(feature).coordinates).toEqual([[39.32, -101.74], [39.33, -101.55]]);

    })
});

describe("Polygon:", function () {

    var feature;

    beforeEach(function () {
        feature = {
            "type": "Polygon",
            "coordinates": [
                [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]]
            ]
        };
    })

    it("should flip", function () {

        expect(flip(feature).coordinates).toEqual([[[0.0, 100.0], [0.0, 101.0], [1.0, 101.0], [1.0, 100.0], [0.0, 100.0]]]);

    })
});

describe("MultiPolygon:", function () {

    var feature;

    beforeEach(function () {
        feature = {
            "type": "MultiPolygon",
            "coordinates": [
                [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
                [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
                    [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
            ]
        };
    })

    it("should flip", function () {

        expect(flip(feature).coordinates).toEqual(
            [[[[2, 102], [2, 103], [3, 103], [3, 102], [2, 102]]], [[[0, 100], [0, 101], [1, 101], [1, 100], [0, 100]], [[0.2, 100.2], [0.2, 100.8], [0.8, 100.8], [0.8, 100.2], [0.2, 100.2]]]]
        );

    })
});