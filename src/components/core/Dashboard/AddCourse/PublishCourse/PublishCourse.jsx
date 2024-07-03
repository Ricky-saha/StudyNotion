import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import { resetCourseState, setStep } from '../../../../../slices/courseSlice';
import { COURSE_STATUS } from '../../../../../utils/constants';
import { addCourseToCategory, editCourseDetails } from '../../../../../services/operations/courseDetailsAPI';


const PublishCourse = () => {
    const {register , handleSubmit, setValues, getValues} =useForm();
    const {course} = useSelector((state)=> state.course)
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.auth)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        if(course?.status === COURSE_STATUS.PUBLISHED){
                    setValues("public", true)
              }
    })

    const gotToCourses = ()=> {
        dispatch(resetCourseState());
        //navigate("/dashboard/my-courses")
    }

    const handleCoursePublish =async ()=>{
        if(course?.status === COURSE_STATUS.PUBLISHED &&getValues("public") === true || 
        ( course?.status !== COURSE_STATUS.PUBLISHED && getValues("public") === false))
        {
            //no update needed
            //no need to make api call 
            gotToCourses();
        }
        //if form is updated
        const formData = new FormData();
        formData.append("courseId", course._id);
        const courseStatus =getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
        formData.append("status", courseStatus);

        setLoading(true);
        const result = await editCourseDetails(formData, token);
        if(result){
            gotToCourses();
        }
        setLoading(false);
    }

    

    const onSubmit = () => {
        handleCoursePublish()
    }

    const goBack = () => {
        dispatch(setStep(2))
    }


  return (
    <div>
    <div className='rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6'>
        <p className='text-2xl font-semibold text-richblack-5' >Publish Settings</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-6 mb-8'>
        <label htmlFor="public" className="inline-flex items-center text-lg">
            <input defaultChecked={false} type="checkbox" id="public" name="public" className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5" {...register("public")} />
            <span className="ml-2 text-richblack-400">Make this course as public</span>
        </label>
        </div>
        <div className="ml-auto flex max-w-max items-center gap-x-4">
            <button disabled={loading} onClick={goBack} type="button" className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900">Back</button>
            <button disabled={loading} type='submit' className="flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 undefined">Save Changes</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default PublishCourse