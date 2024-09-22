import React from 'react'
import { CourseCardData } from '../../../assets/API/CourseCardData'
import CourseCard from '../CourseCard/CourseCard'
import { Link } from 'react-router-dom'

const AllCourse = () => {
  return (
    <>
        <div className='max-w-[100%]'>
            <div className='w-[100%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2'>
                {
                    CourseCardData.map((e)=>{
                        return(
                            <Link to={"/coursedetails"}>
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
                            </Link>
                            
                        )
                    })
                }

            </div>
        </div>
      
    </>
  )
}

export default AllCourse
