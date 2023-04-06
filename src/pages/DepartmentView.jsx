import DepartmentContact from "../components/DepartmentContact";
import { useGetAboutUsAPI } from "../hooks/useGetServiceAPI";

const DepartmentView = () => {
  const { data: serviceData, isLoading: loadService } = useGetAboutUsAPI();
  if (loadService)
    return (
      <>
        <p>...Loading</p>
      </>
    );
  return (
    <div>
      <DepartmentContact serviceData={serviceData} />
    </div>
  );
};

export default DepartmentView;
