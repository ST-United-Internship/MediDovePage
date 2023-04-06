import { Button, Col, Row } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/slider-intro.css";
import "../assets/css/slider-text.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import {
  CloseOutlined,
  PlayCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";

const SlideIntro = () => {
  useEffect(() => {
    Aos.init();
  });

  const [isDisplayVideo, setIsDisplayVideo] = useState(false);

  const stopVideo = () => {
    var iframe = document.querySelector("iframe");
    var video = document.querySelector("video");

    if (iframe !== null) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }

    if (video !== null) {
      video.pause();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Slider className="custom-slider" {...settings}>
            <div className="slider-item">
              <img src="https://medi-dove.netlify.app/static/media/slider-bg-2in1.a274526164db40a919cb.jpg" />
              <div className="slider-text-container">
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="first-line"
                >
                  We are for your care
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="second-line"
                >
                  Best Care & Better Doctor.
                </p>
                <p data-aos="fade-up" className="third-line">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="btn-container">
                  <Button
                    className="btn-appoint"
                    type="primary"
                    shape="round"
                    size="large"
                    icon={<PlusCircleFilled />}
                  >
                    MAKE APPOINTMENT
                  </Button>

                  <Button
                    className="btn-play"
                    onClick={() => {
                      setIsDisplayVideo(true);
                    }}
                    size="large"
                    shape="circle"
                    icon={<PlayCircleFilled />}
                  />
                </div>
              </div>
            </div>

            <div className="slider-item">
              <img src="https://medi-dove.netlify.app/static/media/slider-bg-1.a5b879494592cab4771e.jpg" />
              <div className="slider-text-container">
                <p data-aos="fade-up" className="first-line">
                  We are for your care
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="second-line"
                >
                  Best Care & Better Doctor.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="third-line"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="btn-container">
                  <Button
                    className="btn-appoint"
                    type="primary"
                    shape="round"
                    size="large"
                    icon={<PlusCircleFilled />}
                  >
                    MAKE APPOINTMENT
                  </Button>

                  <Button
                    className="btn-play"
                    onClick={() => {
                      setIsDisplayVideo(true);
                    }}
                    size="large"
                    shape="circle"
                    icon={<PlayCircleFilled />}
                  />
                </div>
              </div>
            </div>
          </Slider>
          <div className={isDisplayVideo ? "show-video" : "hide-video"}>
            <div>
              <div>
                <CloseOutlined
                  className="btn-close"
                  onClick={() => {
                    stopVideo();
                    setIsDisplayVideo(false);
                  }}
                />
              </div>
              <iframe
                width="900"
                height="507"
                src="https://www.youtube.com/embed/oU_GUAWz52w"
                title="DevPlus"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SlideIntro;
