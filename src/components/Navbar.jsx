import { Col, Drawer, Menu, Row } from "antd";
import "../assets/css/navbar.css";
import { PhoneFilled, MailFilled, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <Row className="bar-left" gutter={24}>
          <Col span={12} className="item-container-left">
            <div>
              <PhoneFilled />
              +1 800 833 9780
            </div>
            <div>
              <MailFilled />
              info@example.com
            </div>
          </Col>

          <Col span={12} className="item-container-right">
            <div className="header-top-right-btn f-right">
              <a className="primary_btn appoint-btn custom-btn">
                Make Appointment
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <div className="navbar container">
        <Row gutter={16} align="middle" justify="space-between">
          <Col span={6}>
            <div className="logo-nav">
              <Link to="/">
                <img
                  src="https://medi-dove.netlify.app/img/logo/logo.png"
                  alt="#"
                />
              </Link>
            </div>
          </Col>
          <Col span={12} offset={4} className="sub-menu">
            <div className="header__menu f-right">
              <div className="mobile-menu">
                <a href="/">Home +</a>

                <a href="/services-details">Department +</a>

                <a href="/doctor">Doctors +</a>
                <a href="/doctors-details">Doctors Details +</a>
                <a href="/department">Department +</a>
              </div>
            </div>
          </Col>
          <Col span={2} className="enl-logo">
            <img
              src="https://medi-dove.netlify.app/img/icon/lang.png"
              alt="#"
            />
          </Col>
          <Col className="sidebar-btn" onClick={() => setOpen(!open)}>
            <MenuOutlined />
          </Col>
        </Row>
      </div>

      <Drawer
        closeIcon={<i className="close-icon"></i>}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Menu
          items={[
            { label: "Home" },
            { label: "Department" },
            { label: "Doctor" },
          ]}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
