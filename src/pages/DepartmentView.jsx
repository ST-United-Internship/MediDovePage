import DepartmentContact from "../components/DepartmentContact";
import { useGetServiceAPI } from "../hooks/useGetServiceAPI";
import DepartmentHealth from "../components/DepartmentHealth";

import { useGetHealthAPI } from "../hooks/useGetHealthAPI";

import HireEmployer from "../components/HireEmployer";
import Navbar from "../components/Navbar";

const DepartmentView = () => {
  const { data: serviceData, isLoading: loadService } = useGetServiceAPI();
  const { data: heathData, isLoading: isLoadingHealth } = useGetHealthAPI();

  if (loadService || isLoadingHealth)
    return (
      <>
        <p>...Loading</p>
      </>
    );

  return (
    <div>
      <Navbar />
      <DepartmentHealth Department={heathData} />
      <DepartmentContact serviceData={serviceData} />
      <HireEmployer />
    </div>
  );
};

export default DepartmentView;
