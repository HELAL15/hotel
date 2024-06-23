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
import SwiperDirProvider from './context/SwiperDir';
import UserProvider from './context/UserContext';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

          <UserProvider>
      <ChangeLng>
        <OpenProvider>
          <BookingProvider>
          <SwiperDirProvider>
          <ToastContainer/>
            <App />
          </SwiperDirProvider>
          </BookingProvider>
        </OpenProvider>
      </ChangeLng>
          </UserProvider>
  </Router>
);

