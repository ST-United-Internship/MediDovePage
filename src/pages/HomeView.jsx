import AboutUs from "../components/AboutUs";
import SlideIntro from "../components/SlideIntro";

import { useGetAboutUsAPI } from "../hooks/useGetAboutUsAPI";
import AboutMember from "../components/AboutMember";
import { useGetAboutMemberApi } from "../hooks/useGetAboutMemberAPI";

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
    </>
  );
};

export default HomeView;
