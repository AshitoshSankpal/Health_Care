// components/ServiceList.js
import React from 'react';
import "../../src/App.css";

function ServiceList({ services, deleteService, handleEditClick }) {
  return (
    <div>
      <h2>Service List</h2>
      {services.length > 0 ? (
        <ul>
          {services.map(service => (
            <li key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Price: ${service.price}</p>
              <button onClick={() => handleEditClick(service)}>Edit</button>
              <button onClick={() => deleteService(service.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
}

export default ServiceList;
