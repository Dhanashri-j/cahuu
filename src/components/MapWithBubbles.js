import world50m from 'assets/geo-data/world-50m.json';
import cities from 'assets/geo-data/world-most-populous-cities.json';
import { scaleLinear } from 'd3-scale';
import React, { Component } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Markers,
  ZoomableGroup,

} from 'react-simple-maps';
import { getColor } from 'utils/colors';

const cityScale = scaleLinear()
  .domain([0, 37843000])
  .range([1, 25]);

class BubbleMap extends Component {
  state = {
    cities,
  };

  render() {
    // const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    const lightColor = getColor('light');
    const geoUrl =
      "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const markers = [
      {
        markerOffset: -30,
        name: "Buenos Aires",
        coordinates: [-58.3816, -34.6037]
      },
      { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
      { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
      { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
      { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
      { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
      { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
      { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
      { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
      { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
      { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
      { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
    ];

    return (
      <ComposableMap
        projectionConfig={{ scale: 205 }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <ZoomableGroup center={[0, 20]} disablePanning>
          <Geographies geography={world50m}>
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  geography.id !== 'ATA' && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: lightColor,
                          stroke: lightColor,
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: secondaryColor,
                          stroke: secondaryColor,
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        pressed: {
                          fill: secondaryColor,
                          stroke: secondaryColor,
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  ),
              )
            }
          </Geographies>
          <Markers>
            {this.state.cities.map((city, i) => (
              <Marker key={i} marker={city}>
                <circle
                  cx={0}
                  cy={0}
                  r={cityScale(city.population)}
                  fill={secondaryColor}
                  stroke={secondaryColor}
                  strokeWidth="2"
                />
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    );
  }
}

export default BubbleMap;
