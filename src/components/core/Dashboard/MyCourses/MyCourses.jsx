import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {fetchInstructorCourses} from '../../../../services/operations/courseDetailsAPI'
import IconBtn from '../../../common/IconBtn'
import { CiSquarePlus } from "react-icons/ci";
import CourseTable from './CourseTable'
const MyCourses = () => {
    const {token} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    const fetchCourses = async () => {
        const result = await fetchInstructorCourses(token);
        if(result){
            setCourses(result)
        }
    }

    useEffect(()=>{
      
        fetchCourses()
    },[])

  return (
    <div>

        <div>
            <h1>My Courses</h1>
            <IconBtn
                text="Add Course"
                onclick={()=> navigate("/dashboard/add-course")}
                icon ={<CiSquarePlus/>}
            />
        </div>
        {courses && <CourseTable courses={courses} setCourses={setCourses}/>}
    </div>
  )
}

export default MyCourses