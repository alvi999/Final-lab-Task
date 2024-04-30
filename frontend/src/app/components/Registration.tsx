"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/registration', formData);
      console.log('Registration successful:', response.data);
      window.location.href = '/Login';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6', padding: '3rem' }}>
      <div style={{ maxWidth: '30rem', width: '100%', padding: '2rem', backgroundColor: '#FFF', borderRadius: '0.5rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ marginTop: '1rem', marginBottom: '2rem', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#1F2937' }}>Registration</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.25rem', fontSize: '1rem' }}
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.25rem', fontSize: '1rem' }}
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.25rem', fontSize: '1rem' }}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="current-password"
            required
            style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.25rem', fontSize: '1rem' }}
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="submit"
            style={{ padding: '0.75rem', backgroundColor: '#4F46E5', color: '#FFF', border: 'none', borderRadius: '0.25rem', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s ease' }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
