import PropTypes from "prop-types";

function Button({ onClick, type, title, icon }) {
  return (
    <button
      className={"button-primary"}
      onClick={onClick}
      type={type}
      title={title}
    >
      {icon}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object,
};

export default Button;
