import { Col, Row } from "antd";
import "../../assets/css/services/common-container.css";
import "../../assets/css/services/more-services.css";
import "../../assets/css/services/services-care.css";
import "../../assets/css/services/services-form.css";
import "../../assets/css/services/media-query.css";
import SimpleChart from "./Charts/SimpleChart";
import { CheckOutlined } from "@ant-design/icons";

const MoreServices = ({ moreServiceData }) => {
  return (
    <div className="container more-service-container">
      <Row wrap={true} justify={"space-between"}>
        <Col xs={24} lg={14} className="item-left">
          <img
            className="doctor-thumnail"
            src="https://medi-dove.netlify.app/img/services/service-details-thumb1.jpg"
          />

          {/* long text */}
          <div className="long-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </p>
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

          <SimpleChart />

          <div>
            <img
              className="muti-image-doctor"
              src="https://medi-dove.netlify.app/img/services/service-doctors.png"
            />
          </div>

          <div>
            <div className="section-title">
              <div className="section-text pos-rel">
                <h5>download</h5>
                <h1>Free Download Resources</h1>
              </div>
              <div className="section-line pos-rel">
                <img
                  src="https://medi-dove.netlify.app/img/shape/section-title-line.png"
                  alt=""
                />
              </div>
            </div>

            <div className="download-area">
              <a className="download-box mb-20" href="#">
                <div className="single-download-inner">
                  <img
                    src="https://medi-dove.netlify.app/img/icon/pdf.png"
                    alt=""
                  />
                  <span>The Balanced Care Method Flyer.pdf</span>
                  <span className="download-size">57KB</span>
                </div>
              </a>
              <a className="download-box mb-20" href="#">
                <div className="single-download-inner">
                  <img
                    src="https://medi-dove.netlify.app/img/icon/doc.png"
                    alt=""
                  />
                  <span>Infomation sheet 2 2016-17.doc</span>
                  <span className="download-size">87KB</span>
                </div>
              </a>
              <a className="download-box mb-20" href="#">
                <div className="single-download-inner">
                  <img
                    src="https://medi-dove.netlify.app/img/icon/zip.png"
                    alt=""
                  />
                  <span>What_is_home_care_manual.zip</span>
                  <span className="download-size">112KB</span>
                </div>
              </a>
            </div>

            <div className="testi-box">
              <div className="testi-content">
                <div className="testi-quato-icon">
                  <img src="https://medi-dove.netlify.app/img/testimonials/testi-quato-icon.png" />
                </div>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
                <span></span>
              </div>

              <div className="testi-author">
                <h2 className="testi-author-title">Rosalina D. Williamson</h2>
                <span className="testi-author-desination">
                  founder, uithemes
                </span>
              </div>

              <div className="test-author-icon">
                <img
                  src="https://medi-dove.netlify.app/img/testimonials/testi-author-icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} lg={10} className="item-right">
          <div>
            <h1 className="widget-title">More Services</h1>
            {moreServiceData[0]["departments"].map((item, index) => (
              <div key={index} className="item-menu">
                <img className="more-service-img" src={item.img} />
                <p>{item.title}</p>
              </div>
            ))}
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
            </form>

            <div className="set-form-btn">
              <a href="#" className="primary_btn btn-icon">
                <span>+</span>Request for call
              </a>
            </div>
          </div>

          <div className="banner-widget">
            <a href="#">
              <img
                src="https://medi-dove.netlify.app/img/services/services-banner.png"
                alt=""
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MoreServices;
