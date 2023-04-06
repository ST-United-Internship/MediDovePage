import AboutUs from "../components/AboutUs";

import { useGetAboutUsAPI } from "../hooks/useGetAboutUsAPI";

import PricePlan from "../components/PricePlan";

import { useGetPricePlan } from "../hooks/useGetPricePlan";

const HomeView = () => {
  const { data: aboutData, isLoading } = useGetAboutUsAPI();
  const { data: pricePlans, isLoading: loadPricePlan } = useGetPricePlan();

  if (isLoading || loadPricePlan)
    return (
      <>
        <p>...Loading</p>
      </>
    );

  return (
    <>
      <h1>Home</h1>

      <AboutUs aboutData={aboutData} />

      <PricePlan plans={pricePlans} />
    </>
  );
};

export default HomeView;
