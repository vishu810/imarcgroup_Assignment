import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import ManageForm from './components/ManageForm';
import GraphList from './components/GraphList';
import GraphDetail from './components/GraphDetail';

const GraphDetailContainer = ({ graphs }) => {
    const { id } = useParams();
    const graphData = graphs.find(graph => graph.id === parseInt(id));

    return graphData ? <GraphDetail graphData={graphData} /> : <div>No Graph Found</div>;
};

const App = () => {
    const [graphs, setGraphs] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state

    const handleAddGraph = (productData) => {
        const newGraph = {
            id: graphs.length + 1,
            label: productData.name,
            prices: productData.details.map(entry => parseFloat(entry.price)),
            dates: productData.details.map(entry => entry.date),
            descriptions: productData.details.map(entry => entry.description)
        };
        setGraphs([...graphs, newGraph]);
    };

    const handleDeleteGraph = (graphId) => {
        setGraphs(graphs.filter(g => g.id !== graphId));
    };

    const handleLogin = () => {
        setIsLoggedIn(true); // Set login state to true
    };

    return (
        <Router>
            {isLoggedIn && <Navbar />} {/* Conditionally render Navbar */}
            <Routes>
                <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/manage" element={<ManageForm onSubmit={handleAddGraph} />} />
                <Route path="/graphs" element={<GraphList graphs={graphs} onDeleteGraph={handleDeleteGraph} />} />
                <Route path="/graphs/:id" element={<GraphDetailContainer graphs={graphs} />} />
            </Routes>
        </Router>
    );
};

export default App;
