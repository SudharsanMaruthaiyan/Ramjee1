import React from 'react'
import CourseCard from '../CourseCard/CourseCard'
import { ArtDevelopData } from '../../../assets/API/ArtDevelopData'

const ArtDevelop = () => {
  return (
    <>
        <div className='max-w-[100%]'>
            <div className='w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-2'>
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
      
    </>
  )
}

export default ArtDevelop
