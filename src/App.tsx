import React from 'react';
import './App.css';
import Router from './routes/Router';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
      <Router/>
    </AuthProvider>
    </>
  );
}

export default App;
