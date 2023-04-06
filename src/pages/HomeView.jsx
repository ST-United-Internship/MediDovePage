import AboutUs from "../components/AboutUs";
import SlideIntro from "../components/SlideIntro";

import { useGetAboutUsAPI } from "../hooks/useGetAboutUsAPI";
const HomeView = () => {
  const { data: aboutData, isLoading } = useGetAboutUsAPI();

  if (isLoading)
    return (
      <>
        <p>...Loading</p>
      </>
    );

  return (
    <>
      <SlideIntro />
      <AboutUs aboutData={aboutData} />
    </>
  );
};

export default HomeView;
