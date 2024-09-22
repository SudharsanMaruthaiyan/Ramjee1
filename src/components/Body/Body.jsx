import ChooseUs from "../ChooseUs/ChooseUs"
import CourseSection from "../CourseSection/CourseSection"
import ReviewSection from "../ReviewSection/ReviewSection"
import Homepage from "./Homepage/Homepage"
import SearchNav from "./SearchNav/SearchNav"
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent"

const Body = () => {
  return (
    <>  
        <Homepage/>
        <UpcomingEvent/>
        <ChooseUs></ChooseUs>
        <CourseSection></CourseSection>
        <ReviewSection></ReviewSection>
        <SearchNav/>
    </>
  )
}

export default Body