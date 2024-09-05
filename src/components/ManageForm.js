import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageForm = ({ onSubmit }) => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [inputs, setInputs] = useState([{ price: '', date: '', description: '' }]);
    const navigate = useNavigate();

    const handleInputChange = (index, event) => {
        const values = [...inputs];
        values[index][event.target.name] = event.target.value;
        setInputs(values);
    };

    const handleAddInput = () => {
        setInputs([...inputs, { price: '', date: '', description: '' }]);
    };

    const handleRemoveInput = (index) => {
        const values = [...inputs];
        values.splice(index, 1);
        setInputs(values);
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductDescriptionChange = (event) => {
        setProductDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const productData = {
            name: productName,
            description: productDescription,
            details: inputs
        };
        onSubmit(productData);
        navigate('/graphs');
    };

    return (
        <div className="manage-form-container">
            <h2>Manage Product Price Trends</h2>
            <form onSubmit={handleSubmit}>
                <div className="product-info-row">
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={productName}
                        onChange={handleProductNameChange}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Product Description"
                        value={productDescription}
                        onChange={handleProductDescriptionChange}
                        required
                    />
                </div>
                {inputs.map((input, index) => (
                    <div className="entry-row" key={index}>
                        <input
                            type="text"
                            name="price"
                            placeholder="New Price"
                            value={input.price}
                            onChange={event => handleInputChange(index, event)}
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={input.date}
                            onChange={event => handleInputChange(index, event)}
                            required
                        />
                        
                        <button type="button" className="btn-add" onClick={handleAddInput}>+</button>
                        {inputs.length > 1 && (
                            <button type="button" className="btn-remove" onClick={() => handleRemoveInput(index)}>-</button>
                        )}
                    </div>
                ))}
                <button type="submit" className="btn-submit">Add Changes</button>
            </form>
        </div>
    );
};

export default ManageForm;
