import "../assets/homeconsultant.css";
import { Row, Col } from "antd";

const HomeConsultant = () => {
  return (
    <div className="area-post container">
      <Row justify={"center"}>
        <Col lg={18}>
          <div className="area-container">
            <div className="area-row">
              <div className="text-center">
                <div className="text-tittle">
                  <h5>Stay healthy & strong to enjoy life</h5>
                  <h1>
                    Trust Us To Be There To Help All & Make Things Well Again.
                  </h1>
                </div>
              </div>

              <div className="button-area">
                <div className="area-colum">
                  <span>+</span>
                  <a>Get a consultant</a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeConsultant;
