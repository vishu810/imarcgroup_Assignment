import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const GraphDetail = ({ graphData }) => {
    const data = {
        labels: graphData.dates,
        datasets: [{
            label: graphData.label,
            data: graphData.prices,
            borderColor: 'rgba(29, 78, 216, 0.8)',
            fill: false,
            tension: 0.1,
        }]
    };

    const options = {
        maintainAspectRatio: true,  
        responsive: true,
        scales: {
            x: {
                display: true,
            },
            y: {
                display: true,
            }
        }
    };

    const totalAmount = graphData.prices.reduce((acc, price) => acc + price, 0);
    const weekChange = "N/A";
    const monthChange = (graphData.prices[graphData.prices.length - 1] - graphData.prices[graphData.prices.length - 2]).toFixed(2);
    const quarterChange = (graphData.prices[graphData.prices.length - 1] - graphData.prices[0]).toFixed(2);

    return (
        <div className="graph-detail-container">
          
            <div className="graph-section">
                <div className="graph-header">
                    <h2>{graphData.title}</h2>
                    <div className="btn-group">
                        <button className="btn-update">Update</button>
                    </div>
                </div>
                <div className="graph-container">
                    <Line data={data} options={options} />
                </div>
            </div>

            <div className="metrics-section">
                <div className="metric">
                    <h3>{graphData.prices[graphData.prices.length - 1]}</h3>
                    <p>USD/MT</p>
                </div>
                <div className="metric">
                    <p>%W-o-W Change</p>
                    <h4>{weekChange}</h4>
                    <p>N/A</p>
                </div>
                <div className="metric">
                    <p>%M-o-M Change</p>
                    <h4>{monthChange}%</h4>
                    <p>{graphData.prices[graphData.prices.length - 2]}</p>
                </div>
                <div className="metric">
                    <p>%Q-o-Q Change</p>
                    <h4>{quarterChange}%</h4>
                    <p>{graphData.prices[0]}</p>
                </div>
            </div>
        </div>
    );
};

export default GraphDetail;
