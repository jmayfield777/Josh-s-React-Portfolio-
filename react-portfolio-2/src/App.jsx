import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './App.module.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;