import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserCourses } from '../../../services/operations/profileAPI'
import ProgressBar from '@ramonak/react-progress-bar';

const EnrolledCourses = () => {

        const {token}= useSelector((state) => state.auth)

        const [enrolledCourses, setEnrolledCourses] = useState([])


        const getEnrolledCourses = async () => {

            try{
                const response = await getUserCourses(token);

                setEnrolledCourses(response);

            }catch(error){
                console.log("Unable to fetch enrolled courses")
            }


        }
        useEffect(()=>{
            getEnrolledCourses()
        },[])


  return (
    <div className="text-white" >
     

        <div>Enrolled Courses</div>

        {
            !enrolledCourses ?
             (<div></div>) 
             :
            !enrolledCourses.length ? (<p>You have not enrolled in any course  yet</p>)
            : (
                <div>
                    <div>
                        <p>Course Name</p>
                        <p>Durations</p>
                        <p>Progress</p>
                    </div>
                    {/* cards */}
                    {
                        enrolledCourses.map((course,index)=>{
                            <div>
                                <div>
                                    <img src={course.thumbnail} alt="" />
                                    <div>
                                        <p>{course.courseName}</p>
                                        <p>{course.courseDescription}</p>
                                    </div>
                                </div>
                                <div>
                                    {course?.totalDuration}
                                </div>

                                <div>
                                    <p>Progress: {course.progressPercentage || 0}</p>
                                    <ProgressBar
                                    completed ={course.progressPercentage || 0}
                                    height='8px'
                                    isLabelVisible={false}/>
                                </div>
                            </div>
                        })
                    }
                </div>
            )
        }
    </div>
  )
}

export default EnrolledCourses
