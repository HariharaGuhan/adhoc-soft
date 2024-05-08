
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './navbar/sidenavbar';
import TopNavbar from './navbar/topnavbar';
import Home from './component/pages/home';


function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      // Add more cases for additional pages
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <TopNavbar />
      <Container fluid className="main-content">
        <Sidebar />
        {renderPage()}
      </Container>
    </div>
  );
};
export default App;
