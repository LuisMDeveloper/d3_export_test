import { useD3 } from './hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function Bullet({ data }) {
    const ref = useD3((svg) => {
        var projection = d3.geoEquirectangular()
            .fitSize([300,300], data)

        var geoGenerator = d3.geoPath()
            .projection(projection);

        function update(data) {
            var u = svg.select('g.map')
                .selectAll('path')
                .data(data.features);

            u.enter()
                .append('path')
                .attr('d', geoGenerator);

        }

        update(data);

    }, [data.length]);
    return (
        <svg
            ref={ref}
            style={{
                height: 300,
                width: 300
            }}
        >
            <g className="map"></g>
        </svg>
    );
}

export default Bullet;