import OurServices from "../components/Services/OurServices";
import DoctorBodyDetail from "../components/doctors/DoctorBodyDetail";
import FooterTotal from "../components/FooterTotal";
import Navbar from "../components/Navbar";

const DoctorDetailView = () => {
  const content = {
    title1: "We are here for your care.",
    title2: "Doctor Details",
    title3: "Details",
  };

  return (
    <div>
      <Navbar />
      <OurServices content={content} />

      <DoctorBodyDetail />
      <FooterTotal />
    </div>
  );
};

export default DoctorDetailView;
