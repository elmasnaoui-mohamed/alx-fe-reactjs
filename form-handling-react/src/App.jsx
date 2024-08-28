// src/App.js
import React from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';
import FormikForm from './components/formikForm.js';

const App = () => {
  return (
    <div className="App">
      <h1>User Registration Form</h1>
      <h2>Controlled Components</h2>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
};

export default App;
