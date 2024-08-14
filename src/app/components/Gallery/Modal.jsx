import Image from "next/image";

const Modal = ({
  clickedImg,
  setClickedImg,
  handleRotationLeft,
  handleRotationRight,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <div
      className="overlay dismiss bg-dark bg-opacity-90"
      onClick={handleClick}
    >
      <Image src={clickedImg} alt="bigger pic" height={500} width={500} />
      <span className="dismiss" onClick={handleClick}>
        X
      </span>

      <button
        type="button"
        className="btn position-absolute top-50 start-0 translate-middle-y"
        onClick={handleRotationLeft}
        style={{ left: "10px" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        type="button"
        className="btn  position-absolute top-50 end-0 translate-middle-y"
        onClick={handleRotationRight}
        style={{ right: "10px" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Modal;
