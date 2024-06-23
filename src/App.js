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
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './pages/auth/ForgetPassword';

const App = () => {

  //return page to top while go to new page
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo({top:0, left:0 , behavior:"instant"})
  },[pathname])



  //Layout
const Layout =()=>{
  return(
    <>
    <Header/>
    <ToastContainer/>
      <Outlet/>
    <Footer/>
    </>
  )
}


  return (
    <Routes>
    <Route  element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/:id" element={<SingleService/>}/>
      <Route path="/places" element={<Places/>}/>
      <Route path="/places/:id" element={<SinglePlace/>}/>
      <Route element={<RequireBack/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/register" element={<SignUp/>}/>
      </Route>
      <Route  element={<AuthGuard/>}>
        <Route  element={<ProfileOutlet/>} >
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
