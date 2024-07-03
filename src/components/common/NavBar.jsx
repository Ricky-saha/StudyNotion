import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks} from "../../data/navbar-links"
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import {categories} from '../../services/apis'
import { apiConnector } from '../../services/apiConnector'
import { FaChevronDown } from "react-icons/fa";

// const subLinks = [
//     {
//         title:"Python",
//         link:"/catalog/python"
//     },
//     {
//         title:"Web dev",
//         link:"/catalog/web-development"
//     }
// ]
const NavBar = () => {


    const {token} = useSelector( (state) => state.auth ); //doubt
    const {user} = useSelector( (state) => state.profile);
    const {totalItems} = useSelector ( (state) => state.cart)
    const location = useLocation();


   const [subLinks, setSubLinks] = useState([]);

    const fetchSublinks =  async() => {
        try{
            const result = await apiConnector("GET", categories.CATEGORIES_API)
            console.log("Printing Sublinks Result:", result);
            setSubLinks(result?.data?.data)
            console.log(subLinks)
        }catch(error){
            console.log("Could not fetch the Categoriy list ",error)
        }
    } 

    useEffect(()=> {
           fetchSublinks();
    },[])


    // yellow krne ke lie path aur url agar same hogya toh yellow warna white 
    const matchRoute =(route) => {
        return matchPath({path:route}, location.pathname);
    }


  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ">
        <div className="flex w-11/12 max-w-maxContent justify-between items-center">

            {/* Image */}
            <Link to="/">
            <img src={logo} alt="logo" width ={160} height={42} loading='lazy'/>
            </Link>


            {/* NavLinks */}

            <nav>
                <ul className="flex gap-x-6 flex-row text-richblack-25">
                    {
                        NavbarLinks.map((link, index) => (

                        <li key={index}>
                                {
                                    link.title === "Catalog" ? (
                                        <div className="relative flex items-center gap-2 cursor-pointer group">
                                            <p>{link.title}</p>
                                            <FaChevronDown />


                                            <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[80%] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]'>
                                            
                                            <div className="absolute  translate-y-[-45%]  translate-x-[80%] left-[50%] top-0 h-6 w-6 rotate-45 rounded bg-richblack-5">

                                            </div>

                                            {
                                                subLinks.length > 0 ? (
                                                    subLinks?.map((element, index) => (
                                                        <Link to={`/catalog/${element?.name}`} key={index}  className="p-2 text-sm">
                                                            <p className=' text-richblack-900 '>
                                                                {element?.name}
                                                            </p>
                                                        </Link>
                                                    ))
                                                ) : (<div></div>)
                                            }

                                            </div>
                                        </div>
                                    ):(
                                        <Link to={link?.path}>
                                            <p className={`${matchRoute(link?.path) ?  "text-yellow-25": "text-richblack-25"}`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    ) 
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* Login/Signup/Dashboard */}
            <div className="flex gap-x-4 items-center ">
                

                {
                    user && user?.accountType !== "Instructor" && (

                        <Link to="/dashboard/cart" className='relative'>

                        <FaShoppingCart className=' fill-richblack-25 w-7 h-7'/>
                        {
                            totalItems > 0 && (
                                <span  className=' shadow-sm shadow-black text-[10px] font-bold bg-yellow-100 text-richblack-900 rounded-full px-1 absolute -top-[2px] right-[8px]'>
                                    {totalItems}
                                </span>
                            )
                        }
                        </Link>

                    )
                }

                {
                    token === null &&(

                        <Link to='/login'>

                            <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                            text-richblack-100 rounded-md">
                                Log in
                            </button>

                        </Link>

                    )
                }

                {
                    token === null &&(
                        <Link to='/signup'>

                        <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                            text-richblack-100 rounded-md">
                            Sign up
                        </button>

                    </Link>
                    )
                }

                {
                    token !== null && <ProfileDropDown />
                }
            </div>


        </div>

    </div>
  )
}

export default NavBar
