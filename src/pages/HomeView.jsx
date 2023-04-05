import AboutUs from "../components/AboutUs";

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
      <h1>Home</h1>

      <AboutUs aboutData={aboutData} />
    </>
  );
};

export default HomeView;
