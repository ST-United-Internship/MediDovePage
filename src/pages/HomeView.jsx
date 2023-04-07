import AboutUs from "../components/AboutUs";
import SlideIntro from "../components/SlideIntro";

import { useGetAboutUsAPI } from "../hooks/useGetAboutUsAPI";
import AboutMember from "../components/AboutMember";
import { useGetAboutMemberApi } from "../hooks/useGetAboutMemberAPI";
import HomeCampus from "../components/HomeCampus";
import { useGetPricePlan } from "../hooks/useGetPricePlan";
import PricePlan from "../components/PricePlan";
import HomeConsultant from "../components/HomeConsultant";
import FooterHome from "../components/FooterHome";

const HomeView = () => {
  const { data: aboutData, isLoading: isLoadingAboutUs } = useGetAboutUsAPI();
  const { data: aboutMemberData, isLoading: isLoadingMember } =
    useGetAboutMemberApi();
  const { data: pricePlans, isLoading: loadPricePlan } = useGetPricePlan();

  if (isLoadingAboutUs || isLoadingMember || loadPricePlan)
    return (
      <>
        <p>...Loading</p>
      </>
    );

  return (
    <>
      <SlideIntro />
      <AboutUs aboutData={aboutData} />
      <AboutMember aboutMemberData={aboutMemberData} />
      <HomeCampus />
      <PricePlan plans={pricePlans} />
      <HomeConsultant />
      <FooterHome />
    </>
  );
};

export default HomeView;
