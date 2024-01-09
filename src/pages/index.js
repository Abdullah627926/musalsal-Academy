import Allcategory from "@/components/Allcategory";
import Cardcourses from "@/components/Cardcourses";
import Courses from "@/components/Courses";
import MusalsalProfessions from "@/components/MusalsalProfession";
import Webinars from "@/components/Webinars";
import Explore from "@/components/explore";
import Teaching from "@/components/teaching";



export default function Home() {
  return (
    <>
      <Explore />
      <MusalsalProfessions/>
      <Courses/>
      <Allcategory/>
      {/* <Cardcourses/> */}
      <Webinars/>
      <Teaching/>
    </>
  )
}
