import { Col, Row } from "antd";
import "../assets/css/priceplan.css";

export default function PricePlan({ plans }) {
  return (
    <div className="price-plan-container">
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24} lg={12} className="section-title">
              <div>
                <img
                  className="section-icon"
                  src="https://medi-dove.netlify.app/img/section/section-back-icon.png"
                ></img>
              </div>
              <h5>Our Plans</h5>
              <h1>Pricing & Plans</h1>
              <div className="section-line">
                <img src="https://medi-dove.netlify.app/img/shape/section-title-line.png"></img>
              </div>
            </Col>

            <Col span={24} lg={12} className="pricing-menu">
              <div>
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="pricing-option"
                      id="monthly"
                      defaultChecked
                    ></input>
                    <label htmlFor="monthly">Monthly</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="pricing-option"
                      id="yearly"
                    ></input>
                    <label htmlFor="yearly">Yearly</label>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="center" align="middle" gutter={24}>
            {plans.map((data) => (
              <Col key={data.title} span={24} md={12} lg={8}>
                <div className="pricing-box">
                  <div>
                    <img src={data.img}></img>
                  </div>
                  <h1>{data.title}</h1>
                  <p>{data.des}</p>
                  <a>
                    <span>+</span>
                    Price: ${data.price.toFixed(2)}
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
