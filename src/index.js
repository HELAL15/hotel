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

// import { I18nextProvider } from "react-i18next";
// import en from './i18n/en.json';
// import ar from './i18n/ar.json';

// import i18next from 'i18next';
// import ChangeLng from './context/ChangeLng';


// i18next.init({
//   interpolation: { escapeValue: false },
//   lng: 'ar',
//   resources: {
//     en: {
//       translation: en
//     },
//     ar: {
//       translation: ar
//     }
//   }
// });




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* <I18nextProvider i18n={i18next}>
    </I18nextProvider> */}
      <ChangeLng>
        <OpenProvider>
          <App />
        </OpenProvider>
      </ChangeLng>
  </Router>
);

