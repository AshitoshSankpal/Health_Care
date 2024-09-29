// components/ServiceForm.js
import React, { useState, useEffect } from 'react';
import "../../src/App.css";


function ServiceForm({ addService, editService, updateService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editService) {
      setName(editService.name);
      setDescription(editService.description);
      setPrice(editService.price);
    }
  }, [editService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return;

    const service = {
      id: editService ? editService.id : Date.now(),
      name,
      description,
      price: parseFloat(price),
    };

    if (editService) {
      updateService(service);
    } else {
      addService(service);
    }

    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editService ? 'Edit' : 'Add'} Service</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">{editService ? 'Update' : 'Add'} Service</button>
    </form>
  );
}

export default ServiceForm;
