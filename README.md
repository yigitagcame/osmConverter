
# OSM Converter

  
  

OSM data converter.

  
  

## Install

  

```

  

npm install

  

```

  

## Run

  

In development mode

```

  

npm start

  

```

or

```

  

npm run dev

  

```

In production mode

```

  

npm run prd

  

```

  

## Use

  

{GET} http://localhost:3000/{minLongitude}/{minLatitude}/{maxLongitude}/{maxLatitude}

**Request**
Longitudes must between -90 and 90. Latitudes must between -180 and 180.
[float] minLongitude

[float] minLatitude

[float] maxLongitude

[float] maxLatitude

**Response**
 Successful :
{
"type": "FeatureCollection",
"features": [...]
}

Unsuccessful:
"ERROR MESSAGE HERE"

## Test

  
  

```

  

npm run test

  

```