import React, { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Places from './pages/Places';
import SingleService from './pages/SingleService';
import SinglePlace from './pages/SinglePlace';
import Account from './pages/Profile/Account';
import AccountPassword from './pages/Profile/AccountPassword';
import Wishlist from './pages/Profile/Wishlist';
import BookList from './pages/Profile/BookList';
import ProfileOutlet from './pages/Profile/ProfileOutlet';
import AuthGuard from './Authed/AuthGuard';
import RequireBack from './Authed/RequireBack';
import ForgetPassword from './pages/auth/ForgetPassword';
import Loader from './layouts/Loader';
import { AnimatePresence } from 'framer-motion';
import Privacy from './pages/Privacy';
import RenterPassword from './pages/auth/RenterPassword';
import Otp from './pages/auth/Otp';
import OtpOutlet from './pages/auth/OtpOutlet';
import CheckOut from './pages/CheckOut';
import { useDispatch } from 'react-redux';
import { setChildDefault, setDate, setID, setInfantDefault, setType } from './redux/features/reservationSlice';
import PayDone from './pages/PayDone';

const App = () => {

  //return page to top while go to new page
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({top:0, left:0 , behavior:"instant"})
  },[location.key])

  const dispatch = useDispatch()
  useEffect(() => {
    if(location.pathname !== '/checkout'){
      dispatch(setType(''));
      dispatch(setInfantDefault());
      dispatch(setChildDefault());
      dispatch(setDate([]));
    }
  }, [location.pathname, dispatch]);

  //Layout
const Layout =()=>{
  return(
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}


  return (
    <Routes >
    <Route  element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/rooms" element={<Services/>}/>
      <Route path="/rooms/:id" element={<SingleService/>}/>
      <Route path="/places" element={<Places/>}/>
      <Route path="/places/:id" element={<SinglePlace/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route element={<RequireBack/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route element={<OtpOutlet/>} >
          <Route path="/otp-code" element={<Otp/>}/>
          <Route path="/enter-new-password" element={<RenterPassword/>}/>
        </Route>
      </Route>
      <Route  element={<AuthGuard/>}>
        <Route path="/checkout/:id" element={<CheckOut/>}/>
        <Route path="/pay-done" element={<PayDone/>}/>
        <Route element={<ProfileOutlet/>} >
        <Route path='/profile' element={<Account/>} />
        <Route path='/account-password' element={<AccountPassword/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
        <Route path='/booking-list' element={<BookList/>} />
      </Route>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Route>
    </Routes>
  )
}

export default App
