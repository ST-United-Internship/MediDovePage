import AboutUs from "../components/AboutUs";
import SlideIntro from "../components/SlideIntro";
import Navbar from "../components/Navbar";

import { useGetAboutUsAPI } from "../hooks/useGetAboutUsAPI";
import AboutMember from "../components/AboutMember";
import { useGetAboutMemberApi } from "../hooks/useGetAboutMemberAPI";
import HomeCampus from "../components/HomeCampus";
import { useGetPricePlan } from "../hooks/useGetPricePlan";
import PricePlan from "../components/PricePlan";
import HomeConsultant from "../components/HomeConsultant";
import FooterHome from "../components/FooterHome";
import HomeBlog from "../components/HomeBlog";
import { useGetNewAPI } from "../hooks/useGetNewAPI";
import GridDepartment from "../components/GridDepartment";

const HomeView = () => {
  const { data: aboutData, isLoading: isLoadingAboutUs } = useGetAboutUsAPI();
  const { data: aboutMemberData, isLoading: isLoadingMember } =
    useGetAboutMemberApi();
  const { data: newsData, isLoading: isLoadingNews } = useGetNewAPI();
  const { data: pricePlans, isLoading: loadPricePlan } = useGetPricePlan();

  if (isLoadingAboutUs || isLoadingMember || loadPricePlan || isLoadingNews)
    return (
      <>
        <p>...Loading</p>
      </>
    );

  return (
    <>
      <Navbar />
      <SlideIntro />
      <AboutUs aboutData={aboutData} />
      <GridDepartment />
      <AboutMember aboutMemberData={aboutMemberData} />
      <HomeCampus />
      <PricePlan plans={pricePlans} />
      <HomeConsultant />
      <HomeBlog newsData={newsData} />
      <FooterHome />
    </>
  );
};

export default HomeView;
