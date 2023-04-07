import DepartmentContact from "../components/DepartmentContact";
import { useGetServiceAPI } from "../hooks/useGetServiceAPI";

import HireEmployer from "../components/HireEmployer";

const DepartmentView = () => {
  const { data: serviceData, isLoading: loadService } = useGetServiceAPI();
  if (loadService)
    return (
      <>
        <p>...Loading</p>
      </>
    );
  return (
    <div>
      <DepartmentContact serviceData={serviceData} />
      <HireEmployer />
    </div>
  );
};

export default DepartmentView;
