import {
  CalendarOutlined,
  CommentOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import "../assets/css/HomeBlog.css";

const HomeBlog = ({ newsData }) => {
  return (
    <section className="latest-news-area container">
      <Row justify={"center"} gutter={24}>
        <Col lg={{ span: 12 }}>
          <div className="section-title-news">
            <div className="section-icon">
              <img
                src="https://medi-dove.netlify.app/img/section/section-back-icon.png"
                alt=""
                className="section-back-icon"
              />
            </div>
          </div>
          <div className="section-text-news">
            <h5>News</h5>
            <h1>Get Every Single Updates Here.</h1>
          </div>
          <div className="section-line">
            <img
              src="https://medi-dove.netlify.app/img/shape/section-title-line.png"
              alt=""
            />
          </div>
        </Col>
        <Col lg={{ span: 12 }} className="btn_vlog">
          <div className="section-button">
            <a href="#" className="primary_btn_blog">
              <span>+</span>
              our blog
            </a>
          </div>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col md={24} xl={16} style={{ display: "flex", gap: "24px" }}>
          {newsData[0]["news"].map((item, index) => (
            <div className="latest-news-box" key={index}>
              <div className="latest-news-thumb">
                <img src={item.img} alt="" />
              </div>
              <div className="latest-news-content">
                <div className="news-meta">
                  <span>
                    <a href="#" className="news-tag">
                      Medical,
                    </a>
                  </span>
                  <span>
                    <a href="#" className="news-tag">
                      Medicine
                    </a>
                  </span>
                </div>
                <h3>
                  <a href="#">{item.title}</a>
                </h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </Col>
        <Col md={24} xl={8}>
          <div className="recent-news-list">
            {newsData[0]["new-detail"].map((item, index) => (
              <div className="latest-news-content singl-news" key={index}>
                <h3>
                  <a href="#">{item.title}</a>
                </h3>
                <span className="meta-date">
                  <CalendarOutlined className="icon-calendar" />
                  {item.date}
                </span>
                <a className="meta-date" href="#">
                  <CommentOutlined className="icon-cmt" />
                  {item.comment} Comments
                </a>
              </div>
            ))}
          </div>
          <div className="mk-call-btn">
            <a href="" className="make-call-btn">
              <PhoneFilled className="phone-icon" />
              make call
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HomeBlog;
