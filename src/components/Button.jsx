import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    return (
      <button
        className={"button-primary"}
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
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object,
};

export default Button;
