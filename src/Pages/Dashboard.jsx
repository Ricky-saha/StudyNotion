import React from 'react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { Outlet } from 'react-router'
import Sidebar from '../components/core/Dashboard/Sidebar'
const Dashboard = () => {

    const {loading:authloading} =useSelector((state)=> state.auth)
    const {loading:profileloading} =useSelector((state)=> state.profile)

    if(authloading || profileloading) {
        return(
             toast.loading("Loading....")
        )
    }

 

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">

      <Sidebar></Sidebar>

      <div className="h-[calc(100vh-3.5rem)] overflow-auto">
            <div className='mx-auto w-11/12 max-w-[1000px] py-18'>
                <Outlet/>
            </div>
      </div>

    </div>
  )
}

export default Dashboard
