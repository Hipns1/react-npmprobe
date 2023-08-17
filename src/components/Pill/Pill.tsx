import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck, AiOutlineWarning } from "react-icons/ai";
import "./Pill.css";

export const Pill = ({ status }) => {
  return (
    <span className={status}>
      {status === "correct" && <AiOutlineCheck />}
      {status === "warning" && <AiOutlineWarning />}
      {status === "error" && <AiOutlineWarning />}
    </span>
  );
};

Pill.propTypes = {
  status: PropTypes.string,
};

export default Pill;
