import Carousel from "react-bootstrap/Carousel";
import "./PropetyDetails.css";
import { IoIosResize } from "react-icons/io";
import Image from "next/image";

const ControlledCarousel = ({ index, setIndex, images }) => {
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container rounded-4 position-relative">
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
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <button
        type="button"
        className="d-flex icon-button position-absolute top-0 end-0 m-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <IoIosResize />
      </button>
    </div>
  );
};

export default ControlledCarousel;
