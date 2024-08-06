import PropTypes from "prop-types";

export default function CallToActionButton(props) {
  return (
    <button className={`call-to-action-btn ${props.class}`}>
      {props.isImgBtn ? (
        <img
          src={require(`../../images-and-icons/${props.img}`)}
          alt="btn-icon"
        />
      ) : (
        props.name
      )}
    </button>
  );
}

CallToActionButton.propTypes = {
  class: PropTypes.string,
  isImgBtn: PropTypes.bool.isRequired,
  img: PropTypes.string,
  name: PropTypes.string,
};
