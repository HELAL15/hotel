import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import OpenProvider from './context/OpenContext'
import { ChangeLng } from './context/ChangeLng';
import BookingProvider from './context/BookServiceContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

      <ChangeLng>
        <OpenProvider>
          <BookingProvider>
            <App />
          </BookingProvider>
        </OpenProvider>
      </ChangeLng>
  </Router>
);

