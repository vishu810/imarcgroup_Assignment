import React from 'react';
import { useNavigate } from 'react-router-dom';
import Graph from './Graph';

const GraphList = ({ graphs, onDeleteGraph }) => {
    const navigate = useNavigate();

    const handleViewGraph = (graphId) => {
        navigate(`/graphs/${graphId}`);
    };

    return (
        <div className="graph-listing-container">
            {graphs.map(graph => (
                <div key={graph.id} className="graph-item">
              
                    <div className="graph-header">
                        <h2>{graph.title}</h2>
                        <div className="graph-controls">
                            <button className="btn-view" onClick={() => handleViewGraph(graph.id)}>View</button>
                            <button className="btn-delete" onClick={() => onDeleteGraph(graph.id)}>Delete</button>
                        </div>
                    </div>
                   
                    <div className="graph-content">
                        <Graph graphData={graph} />
                    </div>

                   
                </div>
            ))}
        </div>
    );
};

export default GraphList;
