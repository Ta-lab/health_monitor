import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './components/Login';
import Register from './components/Register';
import MentalHealthForm from './components/MentalHealthForm';
import AuthRoute from './components/AuthRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/health"
            element={<AuthRoute element={<MentalHealthForm />} />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />


        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
