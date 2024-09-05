import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = ({ graphData, onView, onDelete }) => {
    const data = {
        labels: graphData.dates,
        datasets: [{
            label: graphData.label,
            data: graphData.prices,
            borderColor: 'rgba(29, 78, 216, 0.8)',
            fill: false,
            tension: 0.1
        }]
    };

    return (
        <div className="graph-item">
            <Line data={data} />
          
        </div>
    );
};

export default Graph;
