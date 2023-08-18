import React from "react";
import PropTypes from "prop-types";
import { options } from "./cosntants";
import classNames from "classnames";
import "./Button.css";

export const Button = (
  { text = "Button", color = "primary", size = "sm", onClickFn = null, typeSubmit = false, disabled = false }) => {
  return (
    <button
      type={typeSubmit ? 'submit' : 'button'}
      onClick={onClickFn}
      disabled={disabled}
      className={classNames("button", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        [`disabled`]: disabled,
      })}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  typeSubmit: PropTypes.bool,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  onClickFn: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
