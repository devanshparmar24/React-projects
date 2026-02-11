import React, { use } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logout} from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        Logout
    </button>)
}

export default LogoutBtn