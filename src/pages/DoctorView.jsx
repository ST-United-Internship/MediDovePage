import AboutMember from "../components/AboutMember";
import DoctorInfor from "../components/DoctorInfor";
import FooterTotal from "../components/FooterTotal";
import HomeCampus from "../components/HomeCampus";
import Navbar from "../components/Navbar";
import OurServices from "../components/Services/OurServices";
import { useGetAboutMemberApi } from "../hooks/useGetAboutMemberAPI";
const DoctorView = () => {
  const { data: aboutMemberData, isLoading: isLoadingMember } =
    useGetAboutMemberApi();
  const content = {
    title1: "We are here for your care.",
    title2: "Doctor 01",
    title3: "Doctor",
  };

  if (isLoadingMember)
    return (
      <>
        <p>...Loading</p>
      </>
    );

  return (
    <div>
      <Navbar />
      <OurServices content={content} />
      <AboutMember aboutMemberData={aboutMemberData} />
      <HomeCampus />
      <DoctorInfor />
      <FooterTotal />
    </div>
  );
};

export default DoctorView;
