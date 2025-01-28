import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={`button-primary ${this.props.className}`}
        onClick={this.props.onClick}
        type={this.props.type}
        title={this.props.title}
      >
        {this.props.icon}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object,
};

export default Button;
