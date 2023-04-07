import FooterTotal from "../components/FooterTotal";
import Navbar from "../components/Navbar";
import MoreServices from "../components/Services/MoreServices";
import OurServices from "../components/Services/OurServices";
import { useGetMoreServiceApi } from "../hooks/useGetMoreServiceAPI";

const ServiceView = () => {
  const { data: moreServiceData, isLoading: isLoadingMoreServiceData } =
    useGetMoreServiceApi();
  const content = {
    title1: "We are here for your care.",
    title2: "Our Services",
    title3: "Details",
  };
  if (isLoadingMoreServiceData) return <p>Loading ...</p>;

  return (
    <>
      <Navbar />
      <OurServices content={content} />
      <MoreServices moreServiceData={moreServiceData} />
      <div style={{ marginBottom: "100px" }}></div>
      <FooterTotal />
    </>
  );
};

export default ServiceView;
