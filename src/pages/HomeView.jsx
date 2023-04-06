import AboutUs from "../components/AboutUs";
import SlideIntro from "../components/SlideIntro";

import { useGetAboutUsAPI } from "../hooks/useGetAboutUsAPI";
import AboutMember from "../components/AboutMember";
import { useGetAboutMemberApi } from "../hooks/useGetAboutMemberAPI";
import HomeCampus from "../components/HomeCampus";
import HomeConsultant from "../components/HomeConsultant";
import FooterHome from "../components/FooterHome";

const HomeView = () => {
  const { data: aboutData, isLoading: isLoadingAboutUs } = useGetAboutUsAPI();
  const { data: aboutMemberData, isLoading: isLoadingMember } =
    useGetAboutMemberApi();
  if (isLoadingAboutUs || isLoadingMember)
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
      <HomeConsultant />
      <FooterHome />
    </>
  );
};

export default HomeView;
