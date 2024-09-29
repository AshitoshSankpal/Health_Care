// App.js
import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';

function App() {
  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map(service =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handleEditClick = (service) => {
    setEditService(service);
  };

  return (
    <div className="container">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        editService={editService}
        updateService={updateService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        handleEditClick={handleEditClick}
      />
    </div>
  );
}

export default App;
