import MoreServices from "../components/Services/MoreServices";
import OurServices from "../components/Services/OurServices";
import { useGetMoreServiceApi } from "../hooks/useGetMoreServiceAPI";

const ServiceView = () => {
  const { data: moreServiceData, isLoading: isLoadingMoreServiceData } =
    useGetMoreServiceApi();

  if (isLoadingMoreServiceData) return <p>Loading ...</p>;

  return (
    <>
      <OurServices />
      <MoreServices moreServiceData={moreServiceData} />
    </>
  );
};

export default ServiceView;
