[![Build Status](https://api.travis-ci.org/eivinhb/geojson-flip.svg?branch=master)](https://travis-ci.org/eivinhb/geojson-flip)
[![Coverage Status](https://coveralls.io/repos/github/eivinhb/geojson-flip/badge.svg?branch=master)](https://coveralls.io/github/eivinhb/geojson-flip?branch=master)

# GeoJson-flip

I had to make this little util out of necessity. It only flips 2d geojson.

[Geojson-spec](http://geojson.org/geojson-spec.html#positions) 
says that `The order of elements must follow x, y, z order (easting, northing, 
altitude for coordinates in a projected coordinate reference system, or longitude, latitude, 
altitude for coordinates in a geographic coordinate reference system). 
Map websites like geojson.io and github gist (*.geojson) uses this order of 
coordinates. [MongoDB](https://docs.mongodb.org/manual/reference/geojson) also uses lon lat.

But applications differ as [this web page show](http://www.macwright.org/lonlat/) and should you 
encounter an issue with coordinates on the wrong, then flip em.


## Usage

```
var flip = require("geojson-flip").flip;

console.log(
    flip({
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
    }))
    
/**
{
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [10.1, 125.6]
                },
                "properties": {}
            }
        ]
    }

**/
    
```