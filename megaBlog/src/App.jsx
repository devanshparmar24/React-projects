import { useDispatch } from 'react-redux';
import React,{ useState,useEffect } from 'react';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const[loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .catch((error)=>{
      console.error("Error fetching user data:", error);
      dispatch(logout());
    })
    .finally(()=>{
      setLoading(false);
    })
  }, [ dispatch ]);

  return (!loading ? ( 
    <div className="w-full h-screen flex flex-wrap content-between bg-gray-400">
      <Header />
      <main>
        TODO: {/* <Outlet /> */}
      </main>
      <Footer />
    </div> ) : ( <div className="loading">Loading...</div> )
  );
} 

export default App
