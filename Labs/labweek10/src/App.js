import React, { useState } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const provinces = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick",
    "Newfoundland and Labrador", "Nova Scotia", "Ontario",
    "Prince Edward Island", "Quebec", "Saskatchewan"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
      <div className="App">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
          />
          <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
          />
          <input
              type="text"
              name="address1"
              placeholder="Address"
              value={formData.address1}
              onChange={handleChange}
              required
          />
          <input
              type="text"
              name="address2"
              placeholder="Address 2"
              value={formData.address2}
              onChange={handleChange}
          />
          <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
          />
          <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
          >
            <option value="">Choose...</option>
            {provinces.map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
            ))}
          </select>
          <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
          />
          <label>
            <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
            />
            Agree Terms & Condition?
          </label>
          <button type="submit">Submit</button>
        </form>

        {submittedData && (
            <div style={{ marginTop: '20px' }}>
              <h2>Submitted Data</h2>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Full Name:</strong> {submittedData.name}</p>
              <p><strong>Address:</strong> {submittedData.address1}</p>
              <p><strong>Address 2:</strong> {submittedData.address2}</p>
              <p><strong>City:</strong> {submittedData.city}</p>
              <p><strong>Province:</strong> {submittedData.province}</p>
              <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
              <p><strong>Agree Terms:</strong> {submittedData.agree ? "Yes" : "No"}</p>
            </div>
        )}
      </div>
  );
}

export default App;
