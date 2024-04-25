

import React from "react";

import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleLinear } from "@visx/scale";
import { Group } from "@visx/group";
import { Circle } from "@visx/shape";

function getExtent(data, attr) {
    const max =  data.reduce((acc, curr) => {
        return curr[attr] < acc ? acc : curr[attr]
    }, data[0][attr])
    const min = data.reduce((acc, curr) => {
        return curr[attr] > acc ? acc : curr[attr]
    }, data[0][attr])

    return [min, max]
}

const ScatterPlot = ({
    data,
    width=700,
    height=500,
  }) => {

    const color = "#AB9381"
    const radius = 2.5

    const tickProps = {
        fontSize: 14,
        textAnchor: "middle",
        fontFamily: "Roboto"
    }

    const labelProps = {
        fontSize: 14, 
        fontWeight: "bold"
    }

    const  margin = { top: 30, left: 60, right: 40, bottom: 40 }

    const xDot = d => d.x
    const yDot = d => d.y

    const xScale = scaleLinear({
        range: [margin.left, width - margin.right],
        domain: getExtent(data, 'x'),
        nice: true
    });
    
    const yScale = scaleLinear({
        range: [height - margin.bottom, margin.top],
        domain: getExtent(data, 'y'),
        nice: true
    });

    return (
        <>
          <svg width={width} height={height}>
            <AxisLeft 
                scale={yScale}
                left={margin.left} 
                label="Y-Coordinate"
                labelProps={{...tickProps, ...labelProps}}
                tickLength={0}
                tickLabelProps={()=> ({
                    ...tickProps,
                    dx: "-15px",
                    dy: "4px"
                  })}
             />
            <AxisBottom
              scale={xScale}
              top={height - margin.bottom}
              label="X-Coordinate"
              labelProps={{...tickProps, ...labelProps}}
              tickLength={0}
              tickLabelProps={()=> ({
                ...tickProps,
                dy: "1px"
              })}
            />
            <Group pointerEvents="none">
              {data.map((d, i) => (
                <Circle
                  key={i}
                  cx={xScale(xDot(d))}
                  cy={yScale(yDot(d))}
                  r={radius}
                  fill={color}
                  fillOpacity={0.8}
                  stroke={color}
                />
              ))}
            </Group>
          </svg>
        </>
      );
  };
    
export default ScatterPlot