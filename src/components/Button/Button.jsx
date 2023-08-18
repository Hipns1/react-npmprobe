import React from "react";
import PropTypes from "prop-types";
import { options } from "./cosntants";
import classNames from "classnames";
import "./Button.css";

export const Button = (
  { text = "Button", color = "primary", size = "sm", onClickFn = null, typeSubmit = false }) => {
  return (
    <button
      type={typeSubmit ? 'submit' : 'button'}
      onClick={onClickFn}
      className={classNames("button", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
      })}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  typeSubmit: PropTypes.boolean,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  onClickFn: PropTypes.func
};

export default Button;
