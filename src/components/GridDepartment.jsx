import { Col, Row } from "antd";
import "../assets/css/GridDepartment.css";
import { useNavigate } from "react-router-dom";
const items = [
  {
    img: "https://medi-dove.netlify.app/img/services/service1.png",
    title: "Body Surgery",
    des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    img: "https://medi-dove.netlify.app/img/services/service2.png",
    title: "Dental Care",
    des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    img: "https://medi-dove.netlify.app/img/services/service3.png",
    title: "Service-content",
    des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    img: "https://medi-dove.netlify.app/img/services/service4.png",
    title: "Blood Cancer",
    des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    img: "https://medi-dove.netlify.app/img/services/service5.png",
    title: "Neurology Sargery",
    des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    img: "https://medi-dove.netlify.app/img/services/service6.png",
    title: "Allergic Issue",
    des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
];
const GridDepartment = () => {
  const navigate = useNavigate();

  return (
    <div>
      <>
        <Row
          justify="center"
          style={{ background: "#f4f9fc", maxWidth: "100%", height: "100%" }}
        >
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 22 }}
            lg={{ span: 20 }}
            xl={{ span: 18 }}
            xxl={{ span: 16 }}
          >
            <Row justify="center">
              <div className="img-icon">
                <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" />
              </div>
              <Col className="header-container" style={{ textAlign: "center" }}>
                <p>Departments</p>
                <h1>Managed Your Heathcare Services</h1>
                <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png" />
              </Col>
            </Row>
            <Row gutter={[24, 32]} justify="center" className="grap-container">
              {items.map((items) => {
                return (
                  <Col lg={7} className="item-container">
                    <div className="list-item">
                      <img src={items.img} />
                      <h2>{items.title}</h2>
                      <div className="des-title">{items.des}</div>
                      <a onClick={() => navigate("/services-details")}>
                        Read more
                      </a>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default GridDepartment;
