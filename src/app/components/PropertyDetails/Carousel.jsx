import Carousel from "react-bootstrap/Carousel";
import "./PropetyDetails.css";
import { IoIosResize } from "react-icons/io";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { HiMiniArrowsPointingOut } from "react-icons/hi2";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { HiArrowsPointingOut } from "react-icons/hi2";

import Image from "next/image";

const ControlledCarousel = ({ index, setIndex, images }) => {
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ background: "#f1f5f9", position: "relative" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-item-container position-relative">
              <Image
                src={image}
                alt={`Descripción de la imagen ${i + 1}`}
                className="img-fluid d-block mx-auto"
                width={1000}
                height={1000}
              />
              <button
                type="button"
                className="d-flex icon-button position-absolute top-0 end-0 m-2 text-light rounded-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <HiArrowsPointingOut size={30} />
              </button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;
