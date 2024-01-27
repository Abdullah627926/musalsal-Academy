import Courses from "@/components/Courses";
import MusalsalProfessions from "@/components/MusalsalProfession";
import Webinars from "@/components/Webinars";
import Explore from "@/components/explore";
import Partners from "@/components/partners";
import Teaching from "@/components/teaching";



export default function Home() {
  return (
    <>
      <Explore />
      <MusalsalProfessions />
      <Courses />
      <Webinars />
      <Teaching />
      <Partners/>
    </>
  )
}
