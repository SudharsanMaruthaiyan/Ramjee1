import React from 'react'
import { ArtDevelopData } from '../../assets/API/ArtDevelopData'
import CourseCard from '../Courseroute/CourseCard/CourseCard'

const CourseSection = () => {
  return (
    <>
    <div className='max-w-[100%]'>
        <div className='w-[90%] mx-auto grid grid-cols-1 gap-5'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-start gap-2'>
                    <p className='font-[Poppins] text-[#014BAE] px-3 py-1 rounded-md border bg-[#CCE2FF] uppercase'>Popular Course</p>
                    <p className='font-[Poppins] text-[24px] lg:text-[34px] uppercase font-bold'>Choose Our <span className='text-[#014BAE]'>Top Courses</span> </p>
                </div>
                <div>
                    <button className='px-4 py-2 bg-[#FFDE05] font-medium border hover:bg-transparent hover:border-[#FFDE05] hover:text-[#FFDE05] font-[Poppins] rounded-lg'>Explore All Course</button>
                </div>
            </div>
        <div className='w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-3'>
            {
                ArtDevelopData.map((e)=>{
                    return(
                        <CourseCard
                            imgurl= {e.imgurl}
                            title = {e.title}
                            description = {e.description}
                            curriculam = {e.curriculam}
                            price = {e.price}
                            time = {e.time}
                            students = {e.students}
                            review = {e.review}
                        ></CourseCard>
                    )
                })
            }

        </div>

        </div>
        

    </div>
      
    </>
  )
}

export default CourseSection
