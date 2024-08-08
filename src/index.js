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
import OpenProvider from './context/OpenContext';
import BookingProvider from './context/BookServiceContext';
import UserProvider from './context/UserContext';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import Loader from './layouts/Loader';


disableReactDevTools();

setTimeout(() => {
  localStorage.removeItem('reservationId')
}, 800000);
const MainApp = () => {
  const lang = useSelector((state) => state.lang.value);
  const direction = lang === 'ar' ? 'rtl' : 'ltr';
 
  return (
    <ConfigProvider direction={direction}>
      <ToastContainer rtl={lang === 'ar' ? true : false} />
      {/* <Loader/> */}
      <App />
    </ConfigProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <UserProvider>
        <OpenProvider>
          <BookingProvider>
              <MainApp />
          </BookingProvider>
        </OpenProvider>
      </UserProvider>
    </Router>
  </Provider>
);
