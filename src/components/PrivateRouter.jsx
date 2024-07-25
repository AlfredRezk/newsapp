import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter() {


    const {user} =  useSelector(state=> state.auth)
 
    return user?.email ? <Outlet/>: <Navigate to="/login"/>
}
