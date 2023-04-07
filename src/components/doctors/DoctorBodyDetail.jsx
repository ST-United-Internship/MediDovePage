import { Row, Col } from "antd";

import "../../assets/css/services/common-container.css";
import "../../assets/css/services/more-services.css";
import "../../assets/css/services/services-care.css";
import "../../assets/css/services/services-form.css";
import "../../assets/css/services/media-query.css";
import "../../assets/css/doctor-detail/doctor-detail.css";
import { CheckOutlined } from "@ant-design/icons";

const DoctorBodyDetail = () => {
  return (
    <div
      className="container more-service-container doctor-services-detail-container"
      style={{ marginBottom: "100px" }}
    >
      <Row wrap={true} justify={"space-between"}>
        <Col xs={24} lg={14} className="item-left">
          <div className="container-title">
            <div className="icon-img">
              <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" />
            </div>
            <div className="text-title">
              <h5>INTRODUCING MY SELF</h5>
              <h1>There Is Nothing To Show Something.</h1>
            </div>
            <div className="text-line">
              <img src="http://medi-dove.netlify.app/img/shape/section-title-line.png" />
            </div>
          </div>

          <div className="container-title">
            <div className="text-title">
              <h1>Here Is Skills</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div className="text-line">
              <img src="http://medi-dove.netlify.app/img/shape/section-title-line.png" />
            </div>
          </div>

          {/* Service care */}
          <div className="service-care-container">
            <div className="services-item-left">
              <div>
                <img src="https://medi-dove.netlify.app/img/services/ser-fea-icon-1.png" />
              </div>

              <div>
                <p>PERSONAL CARE</p>
                <ul>
                  <li>
                    <CheckOutlined />
                    Cillum dolore eu fugiat nulla
                  </li>
                  <li>
                    <CheckOutlined />
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <CheckOutlined />
                    Consectetur adipisicing elit
                  </li>
                  <li>
                    <CheckOutlined />
                    Sed do eiusmod tempor inci.
                  </li>
                </ul>
              </div>
            </div>

            <div className="services-item-right">
              <div>
                <img src="https://medi-dove.netlify.app/img/services/ser-fea-icon-2.png" />
              </div>

              <div>
                <p>LIFESTYLE SUPPORT</p>
                <ul>
                  <li>
                    <CheckOutlined />
                    Cillum dolore eu fugiat nulla
                  </li>
                  <li>
                    <CheckOutlined />
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li>
                    <CheckOutlined />
                    Consectetur adipisicing elit
                  </li>
                  <li>
                    <CheckOutlined />
                    Sed do eiusmod tempor inci.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container-title">
            <div className="text-title">
              <h1>Care Coverage</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div className="text-line">
              <img src="http://medi-dove.netlify.app/img/shape/section-title-line.png" />
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15337.17302058118!2d108.24962609999999!3d16.05026505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1680851585752!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: "0", width: "100%" }}
              loading="lazy"
            ></iframe>
          </div>
        </Col>

        <Col xs={24} lg={10} className="item-right">
          <div className="service-widget">
            <div className="widget-title-box">
              <h3 className="widget-title">Get Some Advice?</h3>
            </div>
            <img src="https://medi-dove.netlify.app/img/team/member-big.jpg" />
            <p>Halim D. Keliano</p>
            <p>DENTIST & NEUROLOGIST</p>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h1 className="widget-title">Qualifications</h1>

            <div className="item-menu">
              <img
                style={{ width: "70px" }}
                className="more-service-img"
                src="https://medi-dove.netlify.app/img/services/more-ser-1.png"
              />
              <p>Master of Science </p>
              <p>Oxford Univercity (2011 - 2014)</p>
            </div>

            <div className="item-menu">
              <img
                style={{ width: "70px" }}
                className="more-service-img"
                src="https://medi-dove.netlify.app/img/services/more-ser-5.png"
              />
              <p>Master of Science </p>
              <p>Oxford Univercity (2011 - 2014)</p>
            </div>
          </div>

          <div className="service-widget">
            <div className="widget-title-box">
              <h3 className="widget-title">Get Some Advice?</h3>
            </div>
            <form className="service-contact-form" action="">
              <div className="row">
                <div className="col-xl-12">
                  <div className="contact-input contact-icon contact-user mb-20">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-input contact-icon contact-mail mb-20">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-input contact-icon contact-hourglass">
                    <select
                      style={{
                        paddingLeft: "40px",
                        border: "2px solid #eee7ff",
                        color: "#647589",
                        fontSize: "14px",
                        height: "70px",
                        width: "100%",
                        marginBottom: "15px",
                      }}
                      className="form-select select_style"
                      aria-label="Default select example"
                    >
                      <option>Select type of care</option>
                      <option>Select type of care</option>
                      <option>Select type of care</option>
                      <option>Select type of care</option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                className="button-icon"
                style={{
                  position: "absolute",
                  paddingTop: "20px",
                  paddingLeft: "40px",
                }}
              >
                <div className="button-primary">
                  <span>+</span>
                  <a href="#">Make Appointment</a>
                </div>
              </div>
            </form>
          </div>
          <div className="service-widget mb-50">
            <div className="widget-title-box mb-30">
              <h3 className="widget-title">Languages</h3>
            </div>
            <div className="doctor-detials-lan">
              <ul>
                <li>
                  <a href="#">en</a>
                </li>
                <li>
                  <a href="#">es</a>
                </li>
                <li>
                  <a href="#">bd</a>
                </li>
                <li>
                  <a href="#">la</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DoctorBodyDetail;
